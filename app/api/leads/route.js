import { createServerSupabaseClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const dataFilePath = path.join(process.cwd(), 'data', 'leads.json')

function getLocalLeads() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const raw = fs.readFileSync(dataFilePath, 'utf8')
      return JSON.parse(raw)
    }
  } catch (err) {
    console.error('Error reading local leads:', err)
  }
  return []
}

function saveLocalLeads(leads) {
  try {
    const dir = path.dirname(dataFilePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(leads, null, 2), 'utf8')
  } catch (err) {
    console.error('Error writing local leads:', err)
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    if (!body.name && !body.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const now = new Date()
    const formattedDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
    const submittedAt = `${formattedDate} at ${formattedTime}`

    // Detect Form Type
    let formType = body.form_type || ''
    const msg = (body.message || '').toUpperCase()
    const s = (body.service_interested || body.service || '').toUpperCase()
    if (!formType) {
      if (msg.includes('GROWTH CALL') || s.includes('GROWTH CALL') || s.includes('STRATEGY SESSION')) {
        formType = 'growth_call'
      } else if (msg.includes('CUSTOM QUOTE') || s.includes('CUSTOM QUOTE')) {
        formType = 'custom_quote'
      } else if (msg.includes('ROADMAP') || s.includes('ROADMAP')) {
        formType = 'roadmap'
      } else if (body.phone) {
        formType = 'roadmap'
      } else {
        formType = 'inquiry'
      }
    }

    const newLead = {
      id: body.id || `lead-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      name: body.name || 'Website Visitor',
      email: body.email || '',
      company: body.company || body.phone || body.website || 'Direct Inquiry',
      phone: body.phone || '',
      service: body.service_interested || body.service || 'Growth Roadmap',
      service_interested: body.service_interested || body.service || 'Growth Roadmap',
      form_type: formType,
      budget: body.budget_range || body.budget || body.estimated_price || '$1,000 - $3,000',
      budget_range: body.budget_range || body.budget || body.estimated_price || '$1,000 - $3,000',
      timeline: body.timeline || 'Immediate',
      message: body.message || body.notes || (body.phone ? `Phone: ${body.phone}` : '') || '',
      status: 'new',
      created_at: now.toISOString(),
      date: formattedDate,
      time: formattedTime,
      submitted_at: body.submitted_at || submittedAt
    }

    // 1. Save to local persistent storage (always works, 100% reliable)
    const currentLeads = getLocalLeads()
    currentLeads.unshift(newLead)
    saveLocalLeads(currentLeads)

    // 2. Attempt to save to Supabase if configured
    try {
      const supabase = createServerSupabaseClient()
      const { data: sbData, error: sbError } = await supabase.from('leads').insert([{
        id: newLead.id.startsWith('lead-') ? undefined : newLead.id,
        name: newLead.name,
        email: newLead.email,
        company: newLead.company,
        service_interested: newLead.service_interested,
        budget_range: newLead.budget_range,
        timeline: newLead.timeline,
        message: newLead.message,
        status: newLead.status,
        created_at: newLead.created_at
      }]).select()

      if (sbError) {
        console.warn('Supabase insert notice (persisted locally):', sbError.message || sbError)
      } else {
        console.log('Successfully inserted lead into Supabase:', sbData)
      }
    } catch (sbError) {
      console.warn('Supabase insert notice (persisted locally):', sbError?.message || sbError)
    }

    const response = NextResponse.json(newLead, { status: 201 })
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
    return response
  } catch (err) {
    console.error('API Route Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 200 })
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return response
}

export async function GET(request) {
  try {
    let sbLeads = []
    const localLeads = getLocalLeads()

    // 1. Try fetching from Supabase
    try {
      const supabase = createServerSupabaseClient()
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data && data.length > 0) {
        sbLeads = data
      }
    } catch (sbErr) {
      // Supabase unavailable, will use local leads
    }

    // Merge Supabase leads and local leads without duplicates
    const allLeadsMap = new Map()
    
    // Add local leads first
    localLeads.forEach(lead => {
      const key = `${lead.email || ''}_${lead.created_at || lead.id || ''}`
      allLeadsMap.set(key, lead)
    })

    // Overlay or add Supabase leads
    sbLeads.forEach(lead => {
      const key = `${lead.email || ''}_${lead.created_at || lead.id || ''}`
      allLeadsMap.set(key, lead)
    })

    const combined = Array.from(allLeadsMap.values()).map(l => {
      const createdAtDate = l.created_at ? new Date(l.created_at) : null
      const dateStr = l.date || (createdAtDate && !isNaN(createdAtDate.getTime()) ? createdAtDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent')
      const timeStr = l.time || (createdAtDate && !isNaN(createdAtDate.getTime()) ? createdAtDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : '')
      const submittedAtStr = l.submitted_at || (timeStr ? `${dateStr} at ${timeStr}` : dateStr)

      let formType = l.form_type || ''
      if (!formType) {
        const msg = (l.message || '').toUpperCase()
        const s = (l.service || l.service_interested || '').toUpperCase()
        if (msg.includes('GROWTH CALL') || s.includes('GROWTH CALL') || s.includes('STRATEGY SESSION')) {
          formType = 'growth_call'
        } else if (msg.includes('CUSTOM QUOTE') || s.includes('CUSTOM QUOTE')) {
          formType = 'custom_quote'
        } else if (msg.includes('ROADMAP') || s.includes('ROADMAP')) {
          formType = 'roadmap'
        } else {
          formType = 'inquiry'
        }
      }

      return {
        ...l,
        service: l.service || l.service_interested || 'Growth Strategy',
        budget: l.budget || l.budget_range || 'Flexible',
        date: dateStr,
        time: timeStr,
        submitted_at: submittedAtStr,
        form_type: formType
      }
    })

    const isDemoLead = (lead) => {
      const email = (lead.email || '').toLowerCase()
      const id = String(lead.id || '')
      return (
        id.startsWith('lead-sample') || 
        email === 'sarah@zenflow.io' || 
        email === 'alex@solostudio.co' || 
        email === 'sarah@skynet.com' ||
        email === 'elena@solofounder.ai' ||
        email === 'david@acmegrowth.com'
      )
    }

    const filtered = combined.filter(l => !isDemoLead(l))

    // Sort by created_at descending
    filtered.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))

    const res = NextResponse.json(filtered)
    res.headers.set('Access-Control-Allow-Origin', '*')
    return res
  } catch (err) {
    console.error('API Route Error:', err)
    const fallbackRes = NextResponse.json(getLocalLeads(), { status: 200 })
    fallbackRes.headers.set('Access-Control-Allow-Origin', '*')
    return fallbackRes
  }
}

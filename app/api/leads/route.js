import { createServerSupabaseClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const supabase = createServerSupabaseClient()
    const body = await request.json()

    // Map body to Supabase leads schema
    const leadData = {
      name: body.name,
      email: body.email,
      company: body.company,
      service_interested: body.service_interested,
      budget_range: body.budget_range || null,
      timeline: body.timeline || null,
      message: body.message || null,
    }

    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select()

    if (error) {
      console.error('Supabase error inserting lead:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data[0], { status: 201 })
  } catch (err) {
    console.error('API Route Error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

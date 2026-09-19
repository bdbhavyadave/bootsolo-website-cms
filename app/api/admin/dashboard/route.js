import { createServerSupabaseClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

function getLocalLeads() {
  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'leads.json')
    if (fs.existsSync(dataFilePath)) {
      return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'))
    }
  } catch (err) {
    console.error('Error reading leads.json in dashboard route:', err)
  }
  return []
}

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const localLeads = getLocalLeads()

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

    const realLeads = localLeads.filter(l => !isDemoLead(l))
    let postsCount = 0
    let leadsCount = realLeads.length
    let recentPosts = []
    let recentLeads = realLeads.slice(0, 5)

    if (process.env.VERCEL) {
      try {
        const fetchSupabaseData = async () => {
          const { count } = await supabase
            .from('blog_posts')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'published')
          if (typeof count === 'number') postsCount = count

          const { count: sbLeadsCount } = await supabase
            .from('leads')
            .select('*', { count: 'exact', head: true })
          if (typeof sbLeadsCount === 'number' && sbLeadsCount > leadsCount) {
            leadsCount = sbLeadsCount
          }

          const { data: postsData } = await supabase
            .from('blog_posts')
            .select('id, title, category, status, created_at')
            .order('created_at', { ascending: false })
            .limit(4)
          if (postsData) recentPosts = postsData
        }

        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Supabase dashboard timeout')), 1200)
        )

        await Promise.race([fetchSupabaseData(), timeoutPromise])
      } catch (sbErr) {
        console.warn('Dashboard Supabase fetch notice:', sbErr?.message || sbErr)
      }
    }

    return NextResponse.json({
      totals: {
        posts: postsCount,
        leads: leadsCount,
        views: 0,
        readingTime: postsCount > 0 ? '3m' : '0m'
      },
      recentPosts: recentPosts,
      recentLeads: recentLeads
    })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

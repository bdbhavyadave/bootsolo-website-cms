import { createServerSupabaseClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()

    const { count: postsCount } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'published')

    const { count: leadsCount } = await supabase
      .from('leads')
      .select('*', { count: 'exact', head: true })

    const { data: recentPosts } = await supabase
      .from('blog_posts')
      .select('id, title, category, status, created_at')
      .order('created_at', { ascending: false })
      .limit(4)

    // Provide mock data for analytics since user said it's not a priority
    return NextResponse.json({
      totals: {
        posts: postsCount || 0,
        leads: leadsCount || 0,
        views: 45200,
        readingTime: '4m 12s'
      },
      recentPosts: recentPosts || []
    })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

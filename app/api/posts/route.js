import { createServerSupabaseClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const supabase = createServerSupabaseClient()
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') || 'published'

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', status)
    .order('published_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request) {
  const supabase = createServerSupabaseClient()
  const body = await request.json()

  const { data, error } = await supabase
    .from('blog_posts')
    .insert([body])
    .select()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data[0], { status: 201 })
}

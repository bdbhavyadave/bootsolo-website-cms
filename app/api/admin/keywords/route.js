import { createServerSupabaseClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from('keywords')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const supabase = createServerSupabaseClient()
    const body = await request.json()

    // Provide default values since SEO API might not be connected yet
    const keywordData = {
      keyword: body.keyword,
      search_volume: body.search_volume || Math.floor(Math.random() * 5000),
      current_rank: body.current_rank || Math.floor(Math.random() * 100),
      difficulty_score: body.difficulty_score || Math.floor(Math.random() * 100)
    }

    const { data, error } = await supabase
      .from('keywords')
      .insert(keywordData)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

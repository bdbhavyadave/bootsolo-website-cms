import { createServerSupabaseClient } from '@/lib/supabase'
import { getSession } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const { data: palettes, error } = await supabase
      .from('color_palettes')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) throw error

    return NextResponse.json(palettes)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { name, primary_color, secondary_color, accent_color, background_color, is_default } = body

    const supabase = createServerSupabaseClient()

    if (is_default) {
      // Unset previous defaults
      await supabase.from('color_palettes').update({ is_default: false }).neq('id', '00000000-0000-0000-0000-000000000000') // Dummy condition to update all
    }

    const { data, error } = await supabase
      .from('color_palettes')
      .insert({
        name,
        primary_color,
        secondary_color,
        accent_color,
        background_color,
        is_default: is_default || false
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

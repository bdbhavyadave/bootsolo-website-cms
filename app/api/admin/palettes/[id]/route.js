import { createServerSupabaseClient } from '@/lib/supabase'
import { getSession } from '@/lib/auth'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function PUT(request, { params }) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { id } = params
    const body = await request.json()
    const supabase = createServerSupabaseClient()

    if (body.is_default) {
      // Unset previous defaults
      await supabase.from('color_palettes').update({ is_default: false }).neq('id', '00000000-0000-0000-0000-000000000000') // Dummy condition to update all
    }

    const { data, error } = await supabase
      .from('color_palettes')
      .update(body)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { id } = params
    const supabase = createServerSupabaseClient()

    const { error } = await supabase
      .from('color_palettes')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

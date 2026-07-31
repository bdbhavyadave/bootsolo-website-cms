import { createServerSupabaseClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function DELETE(request, { params }) {
  try {
    const supabase = createServerSupabaseClient()
    const { id } = params

    const { error } = await supabase
      .from('keywords')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

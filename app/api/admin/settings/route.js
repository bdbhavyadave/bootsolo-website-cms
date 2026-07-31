import { createServerSupabaseClient } from '@/lib/supabase'
import { getSession } from '@/lib/auth'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const supabase = createServerSupabaseClient()
    const { data: settings, error } = await supabase
      .from('settings')
      .select('*')

    if (error) throw error

    // Convert from array of rows [{key: 'foo', value: {}}] to an object map
    const settingsMap = settings.reduce((acc, curr) => {
      acc[curr.key] = curr.value
      return acc
    }, {})

    return NextResponse.json(settingsMap)
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

    const body = await request.json() // e.g. { key: 'general', value: { site_name: '...' } }
    
    if (!body.key || !body.value) {
      return NextResponse.json({ error: 'Missing key or value' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from('settings')
      .upsert({
        key: body.key,
        value: body.value,
        updated_at: new Date()
      }, { onConflict: 'key' })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

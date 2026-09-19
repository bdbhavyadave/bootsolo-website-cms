import { createServerSupabaseClient } from '@/lib/supabase'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const dataFilePath = path.join(process.cwd(), 'data', 'leads.json')

export async function DELETE(request, { params }) {
  try {
    const { id } = params

    // 1. Delete from local persistent storage
    try {
      if (fs.existsSync(dataFilePath)) {
        const raw = fs.readFileSync(dataFilePath, 'utf8')
        const leads = JSON.parse(raw)
        const filtered = leads.filter(l => l.id !== id)
        fs.writeFileSync(dataFilePath, JSON.stringify(filtered, null, 2), 'utf8')
      }
    } catch (err) {
      console.error('Error deleting local lead:', err)
    }

    // 2. Try deleting from Supabase in background
    ;(async () => {
      try {
        const supabase = createServerSupabaseClient()
        await supabase.from('leads').delete().eq('id', id)
      } catch (sbErr) {
        // ignore
      }
    })()

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  }
}

import { createServerSupabaseClient } from '@/lib/supabase'
import { getSession } from '@/lib/auth'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 })
    }

    const supabase = createServerSupabaseClient()
    const { data: users, error } = await supabase
      .from('users')
      .select('id, email, role, first_name, last_name, created_at')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(users)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 })
    }

    const body = await request.json()
    const { email, password, role, first_name, last_name } = body

    if (!email || !password || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const hash = await bcrypt.hash(password, 10)

    const supabase = createServerSupabaseClient()
    const { data: user, error } = await supabase
      .from('users')
      .insert({
        email: email.toLowerCase(),
        password_hash: hash,
        role,
        first_name,
        last_name
      })
      .select('id, email, role, first_name, last_name, created_at')
      .single()

    if (error) {
      if (error.code === '23505') { // Unique violation
        return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 })
      }
      throw error
    }

    return NextResponse.json(user)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

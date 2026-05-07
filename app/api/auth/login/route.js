import { createServerSupabaseClient } from '@/lib/supabase'
import { createSession } from '@/lib/auth'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    
    // Using a separate users table explicitly defined in the prompt instead of Supabase Auth
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email.toLowerCase())
      .single()

    if (error || !user) {
      // Log failed attempt conceptually
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const isValidPassword = await bcrypt.compare(password, user.password_hash)
    
    if (!isValidPassword) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Create session
    await createSession(user)
    
    // Log activity
    await supabase.from('activity_logs').insert([{
      user_id: user.id,
      action: 'login',
      resource_type: 'user',
      resource_id: user.id
    }])

    return NextResponse.json({ success: true, redirectUrl: '/admin' })
    
  } catch (err) {
    console.error('Login error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

import { createServerSupabaseClient } from '@/lib/supabase'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    
    // Generate standard bcryptjs hash directly in Node.js
    const hash = await bcrypt.hash('dev@Boot#*12911', 10)
    
    // Insert or update the admin user
    const { data, error } = await supabase.from('users').upsert({
      email: 'bdbhavyadave@gmail.com',
      password_hash: hash,
      role: 'admin',
      first_name: 'Bhavya',
      last_name: 'Dave'
    }, { onConflict: 'email' })
    
    if (error) throw error

    return NextResponse.json({ 
      success: true, 
      message: 'Admin account bdbhavyadave@gmail.com created successfully. You can now login.' 
    })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

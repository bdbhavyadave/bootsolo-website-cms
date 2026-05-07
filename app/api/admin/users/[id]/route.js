import { createServerSupabaseClient } from '@/lib/supabase'
import { getSession } from '@/lib/auth'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function PUT(request, { params }) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 })
    }

    const { id } = params
    const body = await request.json()
    const { email, password, role, first_name, last_name } = body

    const updates = { updated_at: new Date() }
    if (email) updates.email = email.toLowerCase()
    if (role) updates.role = role
    if (first_name !== undefined) updates.first_name = first_name
    if (last_name !== undefined) updates.last_name = last_name
    
    if (password) {
      updates.password_hash = await bcrypt.hash(password, 10)
    }

    const supabase = createServerSupabaseClient()
    
    // Prevent an admin from demoting themselves (though another admin could)
    if (id === session.id && role && role !== 'admin') {
      return NextResponse.json({ error: 'You cannot demote yourself.' }, { status: 400 })
    }

    const { data: user, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select('id, email, role, first_name, last_name, updated_at')
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'Email already in use.' }, { status: 400 })
      }
      throw error
    }

    return NextResponse.json(user)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const session = await getSession()
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized. Admin access required.' }, { status: 403 })
    }

    const { id } = params
    
    if (id === session.id) {
      return NextResponse.json({ error: 'You cannot delete your own account.' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

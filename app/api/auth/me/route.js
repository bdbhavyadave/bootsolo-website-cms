import { getSession } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await getSession()
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Map camelCase to snake_case for the UI to match DB expectations
  const user = {
    id: session.id,
    email: session.email,
    role: session.role,
    first_name: session.firstName,
    last_name: session.lastName
  }

  return NextResponse.json({ user })
}

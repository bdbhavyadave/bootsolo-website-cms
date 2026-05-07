import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

// In a real production app, ensure you set a strong JWT_SECRET in .env.local
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-development-only-change-me'
const key = new TextEncoder().encode(JWT_SECRET)

export async function signToken(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30m') // Auto-logout after 30 minutes of inactivity per prompt
    .sign(key)
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, key)
    return payload
  } catch (err) {
    return null
  }
}

export async function getSession() {
  const session = cookies().get('admin_session')?.value
  if (!session) return null
  return await verifyToken(session)
}

export async function createSession(user) {
  const session = await signToken({
    id: user.id,
    email: user.email,
    role: user.role,
    firstName: user.first_name,
    lastName: user.last_name
  })
  
  cookies().set('admin_session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 30 * 60 // 30 minutes
  })
}

export async function destroySession() {
  cookies().set('admin_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  })
}

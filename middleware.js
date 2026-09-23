import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-development-only-change-me'
const key = new TextEncoder().encode(JWT_SECRET)

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
    // Allow unauthenticated access to the login page
    if (pathname === '/admin/login') {
      const session = request.cookies.get('admin_session')?.value
      if (session) {
        try {
          await jwtVerify(session, key)
          // If already logged in, redirect to /admin dashboard
          return NextResponse.redirect(new URL('/admin', request.url))
        } catch (e) {
          // Invalid or expired token, allow viewing login page
        }
      }
      return NextResponse.next()
    }

    // For all other /admin routes, check the admin_session cookie
    const session = request.cookies.get('admin_session')?.value
    if (!session) {
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }

    try {
      await jwtVerify(session, key)
      return NextResponse.next()
    } catch (err) {
      // Invalid or expired token -> redirect to /admin/login
      const loginUrl = new URL('/admin/login', request.url)
      const response = NextResponse.redirect(loginUrl)
      response.cookies.set('admin_session', '', { maxAge: 0, path: '/' })
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}

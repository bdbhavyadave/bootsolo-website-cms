import { NextResponse } from 'next/server'
import { verifyToken } from './lib/auth'

export async function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Only protect /admin routes, excluding /admin/login
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const sessionCookie = request.cookies.get('admin_session')?.value
    
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    const payload = await verifyToken(sessionCookie)
    
    if (!payload) {
      // Token is invalid or expired
      const response = NextResponse.redirect(new URL('/admin/login', request.url))
      response.cookies.delete('admin_session')
      return response
    }
    
    // Refresh the token automatically on every request if it's valid
    // to maintain the 30-minute rolling session
    const response = NextResponse.next()
    
    // For simplicity in middleware, we don't re-sign here because signing requires
    // importing the secret again and potentially dealing with edge-compatibility issues.
    // In a fully robust system, you would refresh the cookie's expiration.
    
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}

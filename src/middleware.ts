import { verifyAccessToken } from '@/utils/verify-access-token'
import { type NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)',
}

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access_token')?.value
  const { pathname } = request.nextUrl

  const isAuthenticated = accessToken && (await verifyAccessToken(accessToken))
  const isAuthenticationRoute = ['/register', '/login'].includes(pathname)

  if (!isAuthenticated && !isAuthenticationRoute) {
    return NextResponse.redirect(new URL('/register', request.url))
  }

  if (isAuthenticated && isAuthenticationRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

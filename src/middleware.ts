import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res: response })

  const { data: { session } } = await supabase.auth.getSession()

  // Redirect to /medicines if logged in and trying to access auth pages
  if (['/auth/signin', '/auth/signup'].includes(request.nextUrl.pathname)) {
    if (session) {
      return NextResponse.redirect(new URL('/medicines', request.url))
    }
  }

  // Redirect to login if not logged in and trying to access protected pages
  if (!session && request.nextUrl.pathname.startsWith('/medicines')) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  return response
}
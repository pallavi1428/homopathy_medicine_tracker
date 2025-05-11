import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res: response })

  const { data: { session } } = await supabase.auth.getSession()

  // Auth routes - redirect if logged in
  if (['/auth/signin', '/auth/signup'].includes(request.nextUrl.pathname)) {
    if (session) {
      return NextResponse.redirect(new URL('/medicines', request.url))
    }
    return response
  }

  // Protected routes - redirect if not logged in
  if (!session && request.nextUrl.pathname.startsWith('/medicines')) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  return response
}

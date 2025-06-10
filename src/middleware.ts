// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";
import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import { CookieOptions } from '@supabase/ssr'

const publicRoutes = ['/login', '/signup', '/auth', '/error']

// export default createMiddleware(routing);

export async function middleware(request: NextRequest) {
	const res = await updateSession(request)
	const { pathname } = request.nextUrl

	// Extract locale as the first segment after the slash
	const segments = pathname.split('/').filter(Boolean)
	const locale = segments[0] || 'en' // fallback to 'en'

	// Now, public routes should be checked as: /[locale]/login, etc.
	const isPublicRoute = publicRoutes.some(route =>
		segments[1] === route.split('/')[1]
	)

	// For all other routes, ensure we have a session
	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return request.cookies.get(name)?.value
				},
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				set(name: string, value: string, options?: CookieOptions) {
					// This is handled in updateSession
				},
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				remove(name: string, options?: CookieOptions) {
					// This is handled in updateSession
				},
			},
		}
	)

	const { data: { session } } = await supabase.auth.getSession()

	// If on a public route and have a session, redirect to home
	if (isPublicRoute && session) {
		return NextResponse.redirect(new URL(`/${locale}`, request.url))
	}

	// If on a public route and don't have a session, allow access
	if (isPublicRoute) {
		return res
	}

	// For protected routes, redirect to locale-aware login if no session
	if (!session) {
		// Prevent redirect loops
		if (segments[1] === 'login') {
			return res
		}
		const redirectUrl = new URL(`/${locale}/login`, request.url)
		redirectUrl.searchParams.set('redirect', request.url)
		return NextResponse.redirect(redirectUrl)
	}

	return res
}

export const config = {
	matcher: [
		// Match all request paths except for:
		// - static files from _next/static, _next/image
		// - API routes (api, trpc)
		// - Vercel internal routes (_vercel)
		// - any path containing a dot (e.g. favicon.ico or file extensions)
		'/((?!api|trpc|_next/static|_next/image|_vercel|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|js|css|map)$).*)',
	],
};
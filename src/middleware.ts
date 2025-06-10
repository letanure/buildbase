import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

// Initialize next-intl middleware with locale routing config
const intlMiddleware = createMiddleware(routing);

// Main middleware function combining intl and Supabase session logic
export async function middleware(request: NextRequest) {
	// Handle locale detection and URL rewriting
	const intlResponse = await intlMiddleware(request);
	if (intlResponse) {
		// If next-intl wants to redirect (e.g., from / to /en), do it!
		return intlResponse;
	}

	// Sync Supabase auth session (sets cookies if needed)
	return await updateSession(request);
}


export const config = {
	matcher: [
		// Only match routes that do NOT start with these paths
		'/((?!_next/static|_next/image|_next|favicon.ico|api|trpc|.well-known).*)',
	],
};

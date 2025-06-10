import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

// Initialize next-intl middleware with locale routing config
const intlMiddleware = createMiddleware(routing);

// Main middleware function combining intl and Supabase session logic
export async function middleware(request: NextRequest) {
	// Handle locale detection and URL rewriting
	await intlMiddleware(request);

	// Sync Supabase auth session (sets cookies if needed)
	return await updateSession(request);
}

  const excludedPaths = [
	"_next/static",
	"_next/image",
	"_next",
	"_vercel",
	"api",
	"trpc",
  ];
  
  const excludedFileExtensions = [
	"svg", "png", "jpg", "jpeg", "gif", "webp",
	"ico", "js", "css", "map", "json", "txt", "woff2?",
  ];
  
  const pattern = `/((?!${[...excludedPaths, `.*\\.(?:${excludedFileExtensions.join("|")})`].join("|")}).*)`;
  
  export const config = {
	matcher: pattern,
  };

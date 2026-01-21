import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define public routes that don't require authentication
// All routes are public EXCEPT checkout, dashboard, and other protected routes
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/products(.*)',
  '/in(.*)', // Product detail pages like /in/a320-bundle
  '/pricing(.*)', // Pricing pages
  '/airlines',
  '/aeronautical-schools',
  '/type-rating-schools',
  '/contact',
  '/privacy',
  '/terms',
  '/tutorials(.*)',
  '/api/webhooks(.*)',
  '/payment(.*)',
  '/.well-known(.*)', // Apple App Site Association and other well-known files
  '/activate(.*)', // License activation links
  '/licenseKey(.*)', // License key validation
]);

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/checkout(.*)',
  '/dashboard(.*)',
]);

// Indian locale codes
const INDIAN_LOCALES = ['en-IN', 'hi-IN', 'ta-IN', 'te-IN', 'kn-IN', 'ml-IN', 'mr-IN', 'gu-IN', 'pa-IN', 'bn-IN', 'or-IN', 'as-IN', 'ne-IN', 'ur-IN'];

/**
 * Detect if user is from India based on Accept-Language header
 */
function isIndianLocale(req: Request): boolean {
  const acceptLanguage = req.headers.get('accept-language') || '';
  
  // Check for Indian locale codes
  for (const locale of INDIAN_LOCALES) {
    if (acceptLanguage.includes(locale)) {
      return true;
    }
  }
  
  // Check for 'IN' country code in locale string
  if (acceptLanguage.match(/[-_]IN\b/i)) {
    return true;
  }
  
  // Check for common Indian language codes
  const indianLanguages = ['hi', 'ta', 'te', 'kn', 'ml', 'mr', 'gu', 'pa', 'bn', 'or', 'as', 'ne', 'ur'];
  const languages = acceptLanguage.toLowerCase().split(',').map(lang => lang.split(';')[0].trim().split('-')[0]);
  
  for (const lang of languages) {
    if (indianLanguages.includes(lang)) {
      return true;
    }
  }
  
  return false;
}

export default clerkMiddleware(async (auth, req) => {
  // Detect Indian locale and add header
  const isIndia = isIndianLocale(req);
  const response = NextResponse.next();
  
  // Add custom header for Indian region detection
  response.headers.set('x-region-india', isIndia ? 'true' : 'false');
  
  // Only protect specific routes (checkout, dashboard, etc.)
  // All other routes are public and don't require authentication
  if (isProtectedRoute(req)) {
    // Get auth state
    const authObj = await auth();
    
    // Check if user is authenticated
    if (!authObj.userId) {
      // Redirect to sign-in if not authenticated, preserving the intended destination
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }
  }
  
  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};



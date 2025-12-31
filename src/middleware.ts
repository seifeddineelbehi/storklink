import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en','de','fr'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
});
 
export const config = {
  // Match only internationalized pathnames, EXCLUDE api routes
  matcher: [
    '/',
    '/talent',
    '/employers',
    '/terms',
    '/privacy',
    '/accessibility',
    '/(de|en|fr)/:path*',
    // Exclude api, _next, _vercel, and files with extensions
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ] 
};
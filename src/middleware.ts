import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
    locales: ['en','de','fr'],
    defaultLocale: 'en',
    localePrefix: 'as-needed'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/talent', '/employers', '/terms','/privacy','/accessibility','/(de|en|fr)/:path*','/((?!_next|_vercel|_netlify|storklink.de|.*\\..*).*)'] 
}; 
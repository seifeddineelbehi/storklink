import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
    locales: ['en','de','fr'],
    defaultLocale: 'en',
    localePrefix: 'as-needed'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['https://storklink.de/', '/talent', '/employers', '/terms','/privacy','/accessibility','/(de|en|fr)/:path*','/((?!_next|_vercel|.*\\..*).*)'] 
};  
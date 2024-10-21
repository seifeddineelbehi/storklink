import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
    locales: ['en','de','fr'],
    defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/talent', '/employers', '/terms','/privacy','/accessibility','/(de|en|fr)/:path*','/((?!api_next|_vercel|.*\\..*).*)'] 
}; 
import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './navigation';

export default createMiddleware({
    locales: ['en','de','fr'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    pathnames
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/talent', '/employers', '/terms','/privacy','/accessibility','/(de|en|fr)/:path*','/((?!_next|_vercel|.*\\..*).*)'] 
};  
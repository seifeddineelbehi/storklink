import './globals.css'
import '../assets/css/tailwind.css'
import '../assets/css/materialdesignicons.min.css'
import { Inter , Lexend } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


const inter = Inter({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-century-gothic',
});

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-century-gothic',
})

export const metadata = {
  title: 'StorkLink',
  description: 'StorkLink',
} 

export default async function LocaleLayout({ children , params:{locale}}) {
   
  const messages = await getMessages();
  return ( 
    <html lang={locale} dir="LTR">
      <body  className={`${inter.variable} ${lexend.variable} font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900`}>
        <NextIntlClientProvider messages= {messages}>
          {children} 
        </NextIntlClientProvider>
      </body>
    
    </html>
  )
} 

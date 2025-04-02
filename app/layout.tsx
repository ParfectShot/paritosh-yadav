'use client';
import '@root/global.scss';
import '@root/global.css';
import { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Navigation from '@components/Navigation';
import Providers from '@components/Providers';
import { onHandleThemeChange } from '@common/utilities';
import MainLogo from '@root/app/assets/icons/main-logo.webp';
import ModalTrigger from '@root/components/ModalTrigger';
import ContactModal from '@root/components/modals/ModalContact';
import ModalStack from '@root/components/ModalStack';
import Head from 'next/head';

type Route = {
  path: string;
  label: string;
  theme?: string;
};

const routes: Route[] = [
  { path: '/work', label: 'Work', theme: 'theme-light' },
  { path: '/photography', label: 'Photography', theme: 'theme-dark' },
  { path: '/blog', label: 'Blog', theme: 'theme-light' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = useCallback((path: string) => pathname.startsWith(path), [pathname]);


  useEffect(() => {
    onHandleThemeChange(routes.find(({ path }) => isActive(path))?.theme || 'theme-light');
  }, [pathname, isActive]);

  const isDevelopment = process.env.NODE_ENV === 'development';


  return (
    <html lang="en-us">
      <Head>
        <title>Paritosh</title>
        <meta name="description" content="Paritosh's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {!isDevelopment && (
          <>
            <meta name="google-site-verification" content="TT6Q0Nw9rcPnAj7v0eSZ38s6IPDZigFvz5m9Owzuq-M" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-2YSE678JXW"></script>
            <script dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-2YSE678JXW');`
              }}></script>
          </>
        )}
      </Head>
      <body className="theme-light">
        <Providers>
          <div className="sticky top-0 z-10 backdrop-blur-sm">
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center justify-center gap-4">
                <Avatar src={MainLogo.src} href="./" />
                <h3 className="text-xl font-bold">Paritosh</h3>
              </div>
              <div className="w-4rem">
                <ModalTrigger modal={ContactModal}>
                  <Button>Contact</Button>
                </ModalTrigger>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Navigation>
              {routes.map(({ path, label }) => (
                <Link key={path} className={`mx-4 ${isActive(path) ? 'border-b-2 border-current' : ''}`} href={path}>
                  {label}
                </Link>
              ))}
            </Navigation>
          </div>
          {children}
          <ModalStack />
        </Providers>
        {!isDevelopment && (
          <>  
            <Analytics mode="production" />
          </>
        )}
      </body>
    </html>
  );
}

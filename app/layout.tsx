'use client';
import '@root/global.scss';
import '@root/global.css';
import { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Navigation from '@components/Navigation';
import Providers from '@components/Providers';
import { onHandleThemeChange } from '@common/utilities';
import MainLogo from '@root/app/assets/icons/main-logo.webp';
import ModalTrigger from '@root/components/ModalTrigger';
import ContactModal from '@root/components/modals/ModalContact';
import ModalStack from '@root/components/ModalStack';

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


  return (
    <html lang="en-us">
      <body className="theme-light">
        <Providers>
          <div className="sticky top-0 z-50 backdrop-blur-sm">
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
      </body>
    </html>
  );
}

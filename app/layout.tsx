import '@root/global.scss';
import Providers from '@components/Providers';
import Avatar from '@root/components/Avatar';
import Button from '@root/components/Button';
import Navigation from '@root/components/Navigation';
import Link from 'next/link';
import MainLogo from "@root/app/assets/icons/main-logo.webp";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us">
      <body className="theme-light">
        <div className="flex justify-between items-center p-4">
          <Avatar src={MainLogo.src} href="./" />
          <div className="w-4rem">
            <Button>Contact</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Navigation>
            <Link className="mx-4" href="/work">
              Work
            </Link>
            <Link className="mx-4" href="/photography">
              Photography
            </Link>
            <Link className="mx-4" href="/blog">
              About
            </Link>
          </Navigation>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { StructuredData } from './layout-client';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.harbur.io/'),
  title: {
    default: 'Harbur Playbook',
    template: '%s | Harbur Playbook',
  },
  description:
    'The Harbur Playbook — how we work at Harbur Cloud Solutions. Onboarding, ways of working, values, and perks.',
  keywords: ['Harbur', 'Playbook', 'Handbook', 'Onboarding', 'Culture', 'Consulting'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.harbur.io',
    siteName: 'Harbur Playbook',
    images: [
      {
        url: 'https://docs.harbur.io/logo.png',
        width: 1200,
        height: 630,
        alt: 'Harbur Logo',
        type: 'image/png',
      },
    ],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <DocsLayout tree={source.pageTree} {...baseOptions()}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}

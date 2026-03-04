import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { AuthProvider } from '@/lib/auth-context'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Trustwood — UI Demo Project',
  description:
    'A fictional banking UI demo built for portfolio and software development demonstration purposes. Not a real bank. No real financial services, transactions, or data collection.',
  keywords: [
    'demo',
    'portfolio project',
    'UI demo',
    'Next.js banking UI',
    'fictional bank',
    'frontend demo',
  ],
  verification: {
    google: '0F51NDwwXnKgGLMOnSOA3uYIGlQEBkCZRmia5hP7Rs4',
  },
  authors: [{ name: 'Independent Developer' }],
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Trustwood — UI Demo Project (Not a Real Bank)',
    description:
      'A fictional banking interface built as a portfolio demonstration. No real banking services are offered.',
    type: 'website',
    url: 'https://retestbank.netlify.app',
  },
  other: {
    'theme-color': '#ffffff',
    disclaimer:
      'This is a demo project. Trustwood is a fictional brand. Not a real financial institution.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit demo declaration for crawlers */}
        {/* <meta name="robots" content="noindex, nofollow" /> */}
        <meta
          name="disclaimer"
          content="DEMO ONLY — Trustwood is a fictional brand. Not a real bank. No financial services provided."
        />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Global demo banner — visible on every page for Safe Browsing review */}
        {/* <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 99999,
            backgroundColor: '#f59e0b',
            color: '#000',
            textAlign: 'center',
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 700,
            lineHeight: 1.4,
          }}
        >
          ⚠️ DEMO PROJECT — This is NOT a real bank. No real data is collected or stored.{' '}
          <a
            href="/disclaimer"
            style={{ textDecoration: 'underline', marginLeft: '6px' }}
          >
            Read Disclaimer
          </a>
        </div> */}

        {/* Push content down so it's not hidden behind the banner */}
        <div>
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  )
}
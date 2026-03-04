import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { AuthProvider } from '@/lib/auth-context'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Trustwood — Modern Digital Banking & Wealth Management',
  description:
    'Experience the future of personal and business banking with Trustwood. Discover high-yield savings, intuitive mobile banking, and world-class security designed for your financial growth.',
  keywords: [
    'online banking',
    'high yield savings',
    'financial services',
    'Trustwood bank',
    'digital banking',
    'wealth management',
    'business banking',
    'secure transfers',
  ],
  authors: [{ name: 'Trustwood Financial Group' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Trustwood — Personal & Business Banking Redefined',
    description:
      'Join thousands of users who trust Trustwood for their daily banking and long-term financial goals. Secure, fast, and built for the modern world.',
    type: 'website',
    url: 'https://trustwood.com',
  },
  other: {
    'theme-color': '#0f172a',
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
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div>
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://favicon-generator.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: 'Favicon Generator – Create favicon.ico from Text, Image, SVG or Emoji',
  description: 'Free online favicon generator. Create favicon.ico from PNG, SVG, text or emoji instantly. Download favicon.ico in seconds. No signup required.',
  keywords: ['favicon generator', 'favicon.ico', 'png to ico', 'svg to favicon', 'emoji favicon', 'favicon maker'],
  openGraph: {
    title: 'Favicon Generator – Create favicon.ico from Text, Image, SVG or Emoji',
    description: 'Free online favicon generator. Create favicon.ico from PNG, SVG, text or emoji instantly. Download favicon.ico in seconds.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Favicon Generator – Create favicon.ico from Text, Image, SVG or Emoji',
    description: 'Free online favicon generator. Create favicon.ico from PNG, SVG, text or emoji instantly.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

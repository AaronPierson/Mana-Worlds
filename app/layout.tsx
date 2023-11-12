import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mana Worlds',
  description: 'Video Game Software Development Company',
  openGraph: {
    title: 'Mana Worlds',
    description: 'Video Game Software Development Company',
    images: [
      {
        url: '../public/imgs/logos/color.png',
        width: 800,
        height: 600,
        alt: 'Mana Worlds Logo',
      },
    ],
    siteName: 'Mana Worlds',
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="night">
      <head>
        <meta charSet="utf-8" />
        {/* <meta name="description" content={metadata.description} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="dc:creator" content="Aaron Pierson" />
        {/* <title>{metadata.title}</title> */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* Header section */}
      <Navbar/>


      {/* Main section */}
      <main className={inter.className}>{children}</main>

      {/* Footer section */}
      <Footer/>
    </html>
  )
}

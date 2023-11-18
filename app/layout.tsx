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
    <html lang="en" data-theme="nord">
      <head>
        <meta charSet="utf-8" />
        {/* <meta name="description" content={metadata.description} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="dc:creator" content="Aaron Pierson" />
        {/* <title>{metadata.title}</title> */}
        <link rel="icon" href="/favicon.ico" />
        <script async defer data-website-id="703aab45-45f4-4e37-8324-89727f91438c" src="https://umami.astranexus.online/umami.js"></script>
        <meta name='keywords' content='Mana Worlds, News, Gaming, Games, Community, About, Contact, Blog, Posts, Posts Page, Post Page, News Page, News Posts, News Post, News Posts Page, News Post Page' />
      </head>
      <body>
        
        {/* Header section */}
        <Navbar/>

        {/* Main section */}
        <main className={inter.className}>{children}</main>

        {/* Footer section */}
        <Footer/>
      </body>
    </html>
  )
}

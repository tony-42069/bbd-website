import type { Metadata } from 'next'
import { Inter, Great_Vibes } from 'next/font/google'
import './globals.css'

// Font configurations
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Donika's Home Baked Goods",
  description: "Homemade goodies, baked by Donika with love",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${greatVibes.variable} font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
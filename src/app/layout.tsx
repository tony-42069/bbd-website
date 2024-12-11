import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} bg-purple-950 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
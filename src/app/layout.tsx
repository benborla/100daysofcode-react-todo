import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'To Do',
  description: 'A basic To Do app project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}
      bg-slate-800
      text-slate-100
      container
      mx-auto
      p-4
      `}>{children}</body>
    </html>
  )
}

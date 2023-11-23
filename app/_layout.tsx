import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

export const metadata : Metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: 'Vercel-Nextjs-PostgreSQL',
  description:
    'A simple Next.js app with Vercel Postgres as the database',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}

/**
 * Root Layout (Required)
 * The root layout is defined at the top level of the app directory and applies to all routes.
 * This layout enables you to modify the initial HTML returned from the server.
 * 
 */

/**
 * Metadata
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 * 
 */
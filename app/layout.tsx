import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wellness App',
  description: 'Track your activity, calories, sleep and water intake.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
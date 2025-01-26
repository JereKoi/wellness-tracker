import type { Metadata } from 'next'
import AuthProvider from './context/AuthProvider'
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
    <AuthProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
    </AuthProvider>
  )
}
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import SessionChecker from '@/components/Auth/SessionChecker'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>
        {children}
        <SessionChecker />
      </body>
    </html>
  )
}
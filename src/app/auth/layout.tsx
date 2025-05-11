import { GeistSans } from 'geist/font/sans'
import './auth.css'  // Now correctly points to file in same directory

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${GeistSans.className} h-full bg-gray-50`}>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

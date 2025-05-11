import Link from 'next/link'
import { supabase } from '@/lib/supabase/client' // Import your pre-configured client

export default async function Home() {
  // Use the existing client instance
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-blue-600">Homeopathy Medicine Tracker</h1>
          {session ? (
            <Link
              href="/medicines"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              My Medicines
            </Link>
          ) : (
            <div className="flex gap-4">
              <Link
                href="/auth/signin"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </header>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Track Your Homeopathy Medicines</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">📦 Medicine Inventory</h3>
              <p className="text-sm text-gray-600">
                Track all your homeopathy medicines with purchase and expiry dates
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">⏰ Expiry Alerts</h3>
              <p className="text-sm text-gray-600">
                Get notified before your medicines expire
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">🔍 Medicine Details</h3>
              <p className="text-sm text-gray-600">
                View detailed information about each medicine
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
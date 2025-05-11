'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

export default function MedicinesPage() {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) router.push('/auth/signin')
    }
    checkAuth()
  }, [router])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Your Medicines</h1>
      <p>Welcome to your medicine tracker!</p>
    </div>
  )
}

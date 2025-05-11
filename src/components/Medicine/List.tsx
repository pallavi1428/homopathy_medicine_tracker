'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import MedicineCard from './Card'

export default function MedicineList() {
  const [medicines, setMedicines] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMedicines = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data, error } = await supabase
        .from('medicines')
        .select('*')
        .eq('user_id', user.id)
        .order('name', { ascending: true })

      if (error) {
        console.error('Error fetching medicines:', error)
      } else {
        setMedicines(data || [])
      }
      setLoading(false)
    }

    fetchMedicines()
  }, [])

  if (loading) return <div className="text-center py-8">Loading medicines...</div>

  return (
    <div className="space-y-4 mt-6">
      {medicines.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No medicines added yet</p>
      ) : (
        medicines.map(medicine => (
          <MedicineCard key={medicine.id} medicine={medicine} />
        ))
      )}
    </div>
  )
}
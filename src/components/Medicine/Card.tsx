'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function MedicineCard({ medicine }: { medicine: any }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    setDeleting(true)
    const { error } = await supabase
      .from('medicines')
      .delete()
      .eq('id', medicine.id)

    if (error) {
      alert('Error deleting medicine: ' + error.message)
    } else {
      router.refresh()
    }
    setDeleting(false)
  }

  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg">{medicine.name}</h3>
          <p className="text-sm text-gray-600 mt-1">
            Purchased: {new Date(medicine.purchase_date).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-600">
            Expires: {new Date(medicine.expiry_date).toLocaleDateString()}
          </p>
        </div>
        <div>
        
      </div>
      <button
        onClick={handleDelete}
        disabled={deleting}
        className="mt-3 text-sm text-red-600 hover:text-red-800 disabled:opacity-50"
      >
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  )
}
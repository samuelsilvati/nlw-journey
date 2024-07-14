'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { LoaderCircle } from 'lucide-react'

export default function page() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/create-trip')
  }, [])
  return (
    <div className="flex h-screen items-center justify-center">
      <LoaderCircle className="h-5 w-5 animate-spin" />
    </div>
  )
}

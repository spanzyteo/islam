'use client'
import React, { useEffect } from 'react'
import Dashboard from './components/Dashboard'
import { useRouter } from 'next/navigation'

const Admin = () => {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth')
    if (!isAuthenticated) {
      router.push('/admin/login')
    }
  }, [router])
  return <div className='bg-[#F2F2f2]'>
    <Dashboard />
  </div>
}

export default Admin

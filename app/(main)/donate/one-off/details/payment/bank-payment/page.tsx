import React from 'react'
import BankPayment from './component/BankPayment'
import Navbar from '@/app/(main)/donate/component/Navbar'

const page = () => {
  return (
    <div>
      <Navbar />
      <BankPayment />
    </div>
  )
}

export default page

import Navbar from '@/app/(main)/donate/component/Navbar'
import React from 'react'
import CashappPayment from './component/CashappPayment'
import DonateFooter from '@/app/(main)/components/DonateFooter'

const page = () => {
  return (
    <div>
      <Navbar />
      <CashappPayment />
      <DonateFooter />
    </div>
  )
}

export default page

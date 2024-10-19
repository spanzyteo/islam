import Navbar from '@/app/(main)/donate/component/Navbar'
import React from 'react'
import PaypalPayment from './component/PaypalPayment'
import DonateFooter from '@/app/(main)/donate/component/DonateFooter'

const page = () => {
  return (
    <div>
      <Navbar />
      <PaypalPayment />
      <DonateFooter />
    </div>
  )
}

export default page

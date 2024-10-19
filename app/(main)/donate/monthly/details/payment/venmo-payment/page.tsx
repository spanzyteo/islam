import Navbar from '@/app/(main)/donate/component/Navbar'
import React from 'react'
import VenmoPayment from './component/VenmoPayment'
import DonateFooter from '@/app/(main)/donate/component/DonateFooter'

const page = () => {
  return (
    <div>
      <Navbar />
      <VenmoPayment />
      <DonateFooter />
    </div>
  )
}

export default page

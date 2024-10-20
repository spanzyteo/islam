import Navbar from '@/app/(main)/donate/component/Navbar'
import React from 'react'
import BitcoinPayment from './component/BitcoinPayment'
import DonateFooter from '@/app/(main)/components/DonateFooter'

const page = () => {
  return (
    <div>
      <Navbar />
      <BitcoinPayment />
      <DonateFooter />
    </div>
  )
}

export default page

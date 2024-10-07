import React from 'react'
import Navbar from '../../../component/Navbar'
import PaymentDetails from './components/PaymentDetails'
import DonateFooter from '../../../component/DonateFooter'

const page = () => {
  return (
    <div>
      <Navbar />
      <PaymentDetails />
      <DonateFooter />
    </div>
  )
}

export default page

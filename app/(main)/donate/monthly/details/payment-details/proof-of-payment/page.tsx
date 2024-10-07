import Navbar from '@/app/(main)/donate/component/Navbar'
import React from 'react'
import ProofOfPayment from './components/ProofOfPayment'
import DonateFooter from '@/app/(main)/donate/component/DonateFooter'

const page = () => {
  return <div>
    <Navbar />
    <ProofOfPayment />
    <DonateFooter />
    </div>
}

export default page

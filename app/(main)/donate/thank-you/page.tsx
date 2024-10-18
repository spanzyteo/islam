import React from 'react'
import Navbar from '../component/Navbar'
import ThankYou from './component/ThankYou'
import DonateFooter from '../component/DonateFooter'

const page = () => {
  return (
    <div>
        <Navbar />
        <ThankYou />
        <DonateFooter />
    </div>
  )
}

export default page
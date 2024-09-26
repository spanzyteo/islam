import React from 'react'
import Navbar from '../../component/Navbar'
import DetailsForm from './component/DetailsForm' 
import DonateFooter from '../../component/DonateFooter'

const page = () => {
  return (
    <>
      <Navbar />
      <DetailsForm />
      <DonateFooter />
    </>
  )
}

export default page

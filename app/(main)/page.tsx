import Image from 'next/image'
import Navbar from './(main)/components/Navbar'
import Banner from './(main)/components/Banner'
import FirstBody from './(main)/components/FirstBody'
import SecondBody from './(main)/components/SecondBody'
import ThirdBody from './(main)/components/ThirdBody'
import FourthBody from './(main)/components/FourthBody'
import SecondaryFooter from './(main)/components/SecondaryFooter'
import Footer from './(main)/components/Footer'
import DonateFooter from './(main)/components/DonateFooter'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstBody />
      <SecondBody />
      <ThirdBody />
      <FourthBody />
      <SecondaryFooter />
      <Footer />
      <DonateFooter />
    </>
  )
}

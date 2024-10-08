import Image from 'next/image'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import FirstBody from './components/FirstBody'
import SecondBody from './components/SecondBody'
import ThirdBody from './components/ThirdBody'
import FourthBody from './components/FourthBody'
import SecondaryFooter from './components/SecondaryFooter'
import Footer from './components/Footer'
import DonateFooter from './components/DonateFooter'

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

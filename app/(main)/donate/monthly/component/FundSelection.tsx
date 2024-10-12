'use client'
import { useState } from 'react'
import axios from 'axios'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import Link from 'next/link'
import WaterForLife from './WaterForLife'
import GlobalEmergencies from './GlobalEmergencies'
import Sadaqah from './Sadaqah'
import Orphan from './Orphan'
import { BASE_URL } from '@/app/(admin)/admin/utils/apiConfig'

const FundSelection = () => {
  const [orphan, setOrphan] = useState(false)
  const [isSadaqah, setIsSadaqah] = useState(false)
  const [isWaterForLife, setIsWaterForLife] = useState(false)
  const [globalEmergencies, setGlobalEmergencies] = useState(false)
  const [selectedFund, setSelectedFund] = useState({
    fund: '',
  }) // State to hold the selected fund

  // Function to handle the selection of a fund type
  const handleFundSelection = (fundType: string) => {
    setSelectedFund({ fund: fundType }) // Set the selected fund type
    setOrphan(fundType === 'Orphan')
    setIsSadaqah(fundType === 'Sadaqah')
    setIsWaterForLife(fundType === 'WaterForLife')
    setGlobalEmergencies(fundType === 'GlobalEmergencies')
  }

  // Function to handle form submission
  const handleSubmit = async () => {
    if (!selectedFund) {
      alert('Please select a fund')
      return
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/register`,
        selectedFund,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        setSelectedFund({
          fund: '',
        })
        console.log('Form submitted successfully:', response.data)
        console.log(response.data)
      } else {
        console.error('Error posting data')
        console.log('Error occurred')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col px-10 rounded-md pb-10">
        <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
          Select Your Fund
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <button
            onClick={() => handleFundSelection('Orphan')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              orphan ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Orphans
          </button>
          <button
            onClick={() => handleFundSelection('Sadaqah')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              isSadaqah ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Sadaqah
          </button>
          <button
            onClick={() => handleFundSelection('WaterForLife')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              isWaterForLife
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Water For Life
          </button>
          <button
            onClick={() => handleFundSelection('GlobalEmergencies')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              globalEmergencies
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Global Emergencies
          </button>
        </div>
        {isSadaqah && <Sadaqah selectedFund={selectedFund} />}
        {isWaterForLife && <WaterForLife selectedFund={selectedFund} />}
        {orphan && <Orphan selectedFund={selectedFund} />}
        {globalEmergencies && <GlobalEmergencies selectedFund={selectedFund} />}
        <div className="flex items-center justify-between mt-8">
          <Link href={'/donate'}>
            <button className="text-2xl font-bold bg-white flex items-center p-2 px-4 gap-2 text-[#A7A7A7] hover:bg-gray-300 hover:text-[#555555] transition-all duration-300 ease-in-out">
              <FaRegArrowAltCircleLeft className="h-[30px] w-[30px]" />{' '}
              <h1>BACK</h1>
            </button>
          </Link>
          {/* <Link href={'/donate/monthly/details'}> */}
            <button
              onClick={handleSubmit}
              className="text-2xl font-bold bg-[#01aef0] flex items-center p-2 px-4 gap-2 text-white hover:bg-blue-500 transition-all duration-300 ease-in-out"
            >
              <h1>NEXT</h1>
              <FaRegArrowAltCircleRight className="h-[30px] w-[30px]" />
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default FundSelection

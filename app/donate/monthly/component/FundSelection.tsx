'use client'
import { useState } from 'react'
import { sadaqah } from '@/app/data/donateData'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import Link from 'next/link'
import WaterForLife from './WaterForLife'
import GlobalEmergencies from './GlobalEmergencies'
import Sadaqah from './Sadaqah'
import Orphan from './Orphan'

const FundSelection = () => {
  const [orphan, setOrphan] = useState(false)
  const [isSadaqah, setIsSadaqah] = useState(false)
  const [isWaterForLife, setIsWaterForLife] = useState(false)
  const [globalEmergencies, setGlobalEmergencies] = useState(false)

  const handleSadaqah = () => {
    setOrphan(false)
    setIsSadaqah(true)
    setIsWaterForLife(false)
    setGlobalEmergencies(false)
  }

  const handleWaterForLife = () => {
    setOrphan(false)
    setIsSadaqah(false)
    setIsWaterForLife(true)
    setGlobalEmergencies(false)
  }

  const handleOrphan = () => {
    setOrphan(true)
    setIsSadaqah(false)
    setIsWaterForLife(false)
    setGlobalEmergencies(false)
  }

  const handleEmergencies = () => {
     setOrphan(false)
     setIsSadaqah(false)
     setIsWaterForLife(false)
     setGlobalEmergencies(true)
  }

  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col px-10 rounded-md pb-10">
        <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
          Select Your Fund
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <button
            onClick={handleOrphan}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              orphan ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Orphans
          </button>
          <button
            onClick={handleSadaqah}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              isSadaqah ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Sadaqah
          </button>
          <button
            onClick={handleWaterForLife}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              isWaterForLife
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Water For Life
          </button>
          <button
            onClick={handleEmergencies}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              globalEmergencies
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Global Emergencies
          </button>
        </div>
        {isSadaqah && <Sadaqah />}
        {isWaterForLife && <WaterForLife />}
        {orphan && <Orphan />}
        {globalEmergencies && <GlobalEmergencies />}
        <div className="flex items-center justify-between mt-8">
          <Link href={'/donate'}>
            <button className="text-2xl font-bold bg-white flex items-center p-2 px-4 gap-2 text-[#A7A7A7] hover:bg-gray-300 hover:text-[#555555] transition-all duration-300 ease-in-out">
              <FaRegArrowAltCircleLeft className="h-[30px] w-[30px]" />{' '}
              <h1>BACK</h1>
            </button>
          </Link>
          <button className="text-2xl font-bold bg-[#01aef0] flex items-center p-2 px-4 gap-2 text-white hover:bg-blue-500 transition-all duration-300 ease-in-out">
            <h1>NEXT</h1>
            <FaRegArrowAltCircleRight className="h-[30px] w-[30px]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FundSelection

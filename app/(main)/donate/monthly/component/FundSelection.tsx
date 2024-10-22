'use client'

import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from 'react-icons/fa'
import Link from 'next/link'
import WaterForLife from './WaterForLife'
import GlobalEmergencies from './GlobalEmergencies'
import Sadaqah from './Sadaqah'
import Orphan from './Orphan'
import { useFund } from '@/app/(main)/utils/Context'

const FundSelection = () => {
  const { state, dispatch } = useFund()

  // Function to handle fund selection
  const handleFundSelection = (fundType: string) => {
    dispatch({ type: 'SELECT_FUND', payload: fundType })
  }

  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col px-10 rounded-md pb-10">
        <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
          Select Your Fund
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <button
            onClick={() => handleFundSelection('Orphans')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Orphans'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Orphans
          </button>
          <button
            onClick={() => handleFundSelection('Sadaqah')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Sadaqah'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Sadaqah
          </button>
          <button
            onClick={() => handleFundSelection('Water For Life')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Water For Life'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Water For Life
          </button>
          <button
            onClick={() => handleFundSelection('Global Emergencies')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Global Emergencies'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Global Emergencies
          </button>
        </div>
        {state.selectedFund === 'Sadaqah' && <Sadaqah />}
        {state.selectedFund === 'Water For Life' && <WaterForLife />}
        {state.selectedFund === 'Orphans' && <Orphan />}
        {state.selectedFund === 'Global Emergencies' && <GlobalEmergencies />}
        <div className="flex items-center justify-between mt-8">
          <Link href={'/donate'}>
            <button className="text-2xl font-bold bg-white flex items-center p-2 px-4 gap-2 text-[#A7A7A7] hover:bg-gray-300 hover:text-[#555555] transition-all duration-300 ease-in-out">
              <FaRegArrowAltCircleLeft className="h-[30px] w-[30px]" />{' '}
              <h1>BACK</h1>
            </button>
          </Link>
          <Link href={'/donate/monthly/details'}>
            <button className="text-2xl font-bold bg-[#01aef0] flex items-center p-2 px-4 gap-2 text-white hover:bg-blue-500 transition-all duration-300 ease-in-out">
              <h1>NEXT</h1>
              <FaRegArrowAltCircleRight className="h-[30px] w-[30px]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FundSelection

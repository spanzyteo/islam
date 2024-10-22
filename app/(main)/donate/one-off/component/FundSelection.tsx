'use client'
import { useRef, useState } from 'react'
import EmergencyAppeal from './EmergencyAppeal'
import Zakat from './Zakat'
import Sadaqah from './Sadaqah'
import NeededMost from './NeededMost'
import Fidyah from './Fidyah'
import Kaffarah from './Kaffarah'
import SudanAppeal from './SudanAppeal'
import SyriaAppeal from './SyriaAppeal'
import YemenAppeal from './YemenAppeal'
import WaterForLife from './WaterForLife'
import OrphansAndChildren from './OrphansAndChildren'
import SadaqahJariya from './SadaqahJariya'
import PeopleInDebt from './PeopleInDebt'
import Waqf from './Waqf'
import Interest from './Interest'
import Humanitarians from './Humanitarians'
import GlobalEmergencies from './GlobalEmergencies'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import Link from 'next/link'
import { useFund } from '@/app/(main)/utils/Context'


const FundSelection = () => {
  const { state, dispatch } = useFund()

  const [selectedFund, setSelectedFund] = useState<string | null>(null)

  const componentRef = useRef<HTMLDivElement>(null)

  const handleFundSelection = (fundType: string) => {
    dispatch({ type: 'SELECT_FUND', payload: fundType })

    setTimeout(() => {
      if (componentRef.current) {
        const topOffset =
          componentRef.current.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        })
      }
    }, 100)
  }

  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col px-10 rounded-md pb-10">
        <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
          Select Your Fund
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <button
            onClick={() => handleFundSelection('Emergency Appeal')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Emergency Appeal'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Palestine Emergency Appeal
          </button>
          <button
            onClick={() => handleFundSelection('Zakat')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Zakat'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Zakat
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
            onClick={() => handleFundSelection('Wherever Needed Most')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Wherever Needed Most'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Wherever Needed Most
          </button>
          <button
            onClick={() => handleFundSelection('Fidyah')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Fidyah'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Fidyah
          </button>
          <button
            onClick={() => handleFundSelection('Kafarrah')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Kafarrah'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Kafarrah
          </button>
          <button
            onClick={() => handleFundSelection('Sudan Emergency Appeal')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Sudan Emergency Appeal'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Sudan Emergency Appeal
          </button>
          <button
            onClick={() => handleFundSelection('Syria Crises Appeal')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Syria Crises Appeal'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Syria Crises Appeal
          </button>
          <button
            onClick={() => handleFundSelection('Yemen Appeal')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Yemen Appeal'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Yemen Appeal
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
            onClick={() => handleFundSelection('Orphans And Children')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Orphans And Children'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Orphans And Children
          </button>
          <button
            onClick={() => handleFundSelection('Sadaqah Jariyah')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Sadaqah Jariyah'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Sadaqah Jariyah
          </button>
          <button
            onClick={() => handleFundSelection('People In Debt')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'People In Debt'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            People In Debt
          </button>
          <button
            onClick={() => handleFundSelection('Waqf')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Waqf'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Waqf
          </button>
          <button
            onClick={() => handleFundSelection('Interest[RIBA]')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Interest[RIBA]'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Interest[RIBA]
          </button>
          <button
            onClick={() =>
              handleFundSelection('Capacity Building For Humanitarians')
            }
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Capacity Building For Humanitarians'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Capacity Building For Humanitarians
          </button>
          <button
            onClick={() => handleFundSelection('Global Emergencies')}
            className={`md:hidden block py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'Global Emergencies'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Global Emergencies
          </button>
        </div>
        <button
          onClick={() => handleFundSelection('Global Emergencies')}
          className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white mt-4 w-[50%] mx-auto md:block hidden ${
            state.selectedFund === 'Global Emergencies'
              ? 'bg-[#01aef0] text-white'
              : 'bg-white text-[#555555]'
          }`}
        >
          Global Emergencies
        </button>
        <div ref={componentRef}>
          {state.selectedFund === 'Emergency Appeal' && <EmergencyAppeal />}
          {state.selectedFund === 'Zakat' && <Zakat />}
          {state.selectedFund === 'Sadaqah' && <Sadaqah />}
          {state.selectedFund === 'Wherever Needed Most' && <NeededMost />}
          {state.selectedFund === 'Fidyah' && <Fidyah />}
          {state.selectedFund === 'Kafarrah' && <Kaffarah />}
          {state.selectedFund === 'Sudan Emergency Appeal' && <SudanAppeal />}
          {state.selectedFund === 'Syria Crises Appeal' && <SyriaAppeal />}
          {state.selectedFund === 'Yemen Appeal' && <YemenAppeal />}
          {state.selectedFund === 'Water For Life' && <WaterForLife />}
          {state.selectedFund === 'Orphans And Children' && (
            <OrphansAndChildren />
          )}
          {state.selectedFund === 'Sadaqah Jariyah' && <SadaqahJariya />}
          {state.selectedFund === 'People In Debt' && <PeopleInDebt />}
          {state.selectedFund === 'Waqf' && <Waqf />}
          {state.selectedFund === 'Interest[RIBA]' && <Interest />}
          {state.selectedFund === 'Capacity Building For Humanitarians' && (
            <Humanitarians />
          )}
          {state.selectedFund === 'Global Emergencies' && <GlobalEmergencies />}
        </div>
        <div className="flex items-center justify-between mt-8">
          <Link href={'/donate'}>
            <button className="text-2xl font-bold bg-white flex items-center p-2 px-4 gap-2 text-[#A7A7A7] hover:bg-gray-300 hover:text-[#555555] transition-all duration-300 ease-in-out">
              <FaRegArrowAltCircleLeft className="h-[30px] w-[30px]" />{' '}
              <h1>BACK</h1>
            </button>
          </Link>
          <Link href={'/donate/one-off/details'}>
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

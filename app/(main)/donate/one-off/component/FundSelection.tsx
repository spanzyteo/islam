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
            onClick={() => handleFundSelection('emergencyAppeal')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'emergencyAppeal'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Palestine Emergency Appeal
          </button>
          <button
            onClick={() => handleFundSelection('zakat')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'zakat'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Zakat
          </button>
          <button
            onClick={() => handleFundSelection('sadaqah')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'sadaqah'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Sadaqah
          </button>
          <button
            onClick={() => handleFundSelection('neededMost')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'neededMost'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Wherever Needed Most
          </button>
          <button
            onClick={() => handleFundSelection('fidyah')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'fidyah'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Fidyah
          </button>
          <button
            onClick={() => handleFundSelection('kafarrah')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'kafarrah'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Kafarrah
          </button>
          <button
            onClick={() => handleFundSelection('sudanAppeal')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'sudanAppeal'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Sudan Emergency Appeal
          </button>
          <button
            onClick={() => handleFundSelection('syriaAppeal')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'syriaAppeal'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Syria Crises Appeal
          </button>
          <button
            onClick={() => handleFundSelection('yemenAppeal')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'yemenAppeal'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Yemen Appeal
          </button>
          <button
            onClick={() => handleFundSelection('waterForLife')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'waterForLife'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Water For Life
          </button>
          <button
            onClick={() => handleFundSelection('orphansAndChildren')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'orphansAndChildren'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Orphans And Children
          </button>
          <button
            onClick={() => handleFundSelection('sadaqahJariya')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'sadaqahJariya'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Sadaqah Jariyah
          </button>
          <button
            onClick={() => handleFundSelection('peopleInDebt')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'peopleInDebt'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            People In Debt
          </button>
          <button
            onClick={() => handleFundSelection('waqf')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'waqf'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Waqf
          </button>
          <button
            onClick={() => handleFundSelection('interest')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'interest'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Interest[RIBA]
          </button>
          <button
            onClick={() => handleFundSelection('humanitarians')}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'humanitarians'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Capacity Building For Humanitarians
          </button>
          <button
            onClick={() => handleFundSelection('globalEmergencies')}
            className={`md:hidden block py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              state.selectedFund === 'globalEmergencies'
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Global Emergencies
          </button>
        </div>
        <button
          onClick={() => handleFundSelection('globalEmergencies')}
          className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white mt-4 w-[50%] mx-auto md:block hidden ${
            state.selectedFund === 'globalEmergencies'
              ? 'bg-[#01aef0] text-white'
              : 'bg-white text-[#555555]'
          }`}
        >
          Global Emergencies
        </button>
        <div ref={componentRef}>
          {state.selectedFund === 'emergencyAppeal' && <EmergencyAppeal />}
          {state.selectedFund === 'zakat' && <Zakat />}
          {state.selectedFund === 'sadaqah' && <Sadaqah />}
          {state.selectedFund === 'neededMost' && <NeededMost />}
          {state.selectedFund === 'fidyah' && <Fidyah />}
          {state.selectedFund === 'kafarrah' && <Kaffarah />}
          {state.selectedFund === 'sudanAppeal' && <SudanAppeal />}
          {state.selectedFund === 'syriaAppeal' && <SyriaAppeal />}
          {state.selectedFund === 'yemenAppeal' && <YemenAppeal />}
          {state.selectedFund === 'waterForLife' && <WaterForLife />}
          {state.selectedFund === 'orphansAndChildren' && <OrphansAndChildren />}
          {state.selectedFund === 'sadaqahJariya' && <SadaqahJariya />}
          {state.selectedFund === 'peopleInDebt' && <PeopleInDebt />}
          {state.selectedFund === 'waqf' && <Waqf />}
          {state.selectedFund === 'interest' && <Interest />}
          {state.selectedFund === 'humanitarians' && <Humanitarians />}
          {state.selectedFund === 'globalEmergencies' && <GlobalEmergencies />}
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

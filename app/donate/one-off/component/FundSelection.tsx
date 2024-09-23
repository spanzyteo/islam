'use client'
import { useState } from 'react'
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

const FundSelection = () => {
  const [emergencyAppeal, setEmergencyAppeal] = useState(false)
  const [zakat, setZakat] = useState(false)
  const [sadaqah, setSadaqah] = useState(false)
  const [neededMost, setNeededMost] = useState(false)
  const [fidyah, setFidyah] = useState(false)
  const [kaffarah, setKaffarah] = useState(false)
  const [sudanAppeal, setSudanAppeal] = useState(false)
  const [syriaAppeal, setSyriaAppeal] = useState(false)
  const [yemenAppeal, setYemenAppeal] = useState(false)
  const [waterForLife, setWaterForLife] = useState(false)
  const [orphansAndChildren, setOrphansAndChildren] = useState(false)
  const [sadaqahJariya, setSadaqahJaria] = useState(false)
  const [peopleInDebt, setPeopleInDebt] = useState(false)
  const [waqf, setWaqf] = useState(false)
  const [interest, setInterest] = useState(false)
  const [humanitarians, setHumanitarians] = useState(false)
  const [globalEmergencies, setGlobalEmergencies] = useState(false)

  const handleEmergencyAppeal = () => {
    setEmergencyAppeal(true)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleZakat = () => {
    setEmergencyAppeal(false)
    setZakat(true)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleSadaqah = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(true)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleNeededMost = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(true)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleFidya = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(true)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleKaffarah = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(true)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleSudanAppeal = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(true)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleSyriaAppeal = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(true)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleYemenAppeal = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(true)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleWaterForLife = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(true)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleOrphansAndChildren = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(true)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleSadaqahJaria = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(true)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handlePeopleInDebt = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(true)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleWaqf = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(true)
    setInterest(false)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleInterest = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(true)
    setHumanitarians(false)
    setGlobalEmergencies(false)
  }
  const handleHumanitarians = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(true)
    setGlobalEmergencies(false)
  }
  const handleGlobalEmergencies = () => {
    setEmergencyAppeal(false)
    setZakat(false)
    setSadaqah(false)
    setNeededMost(false)
    setFidyah(false)
    setKaffarah(false)
    setSudanAppeal(false)
    setSyriaAppeal(false)
    setYemenAppeal(false)
    setWaterForLife(false)
    setOrphansAndChildren(false)
    setSadaqahJaria(false)
    setPeopleInDebt(false)
    setWaqf(false)
    setInterest(false)
    setHumanitarians(false)
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
            onClick={handleEmergencyAppeal}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              emergencyAppeal
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Palestine Emergency Appeal
          </button>
          <button
            onClick={handleZakat}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              zakat ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Zakat
          </button>
          <button
            onClick={handleSadaqah}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              sadaqah ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Sadaqah
          </button>
          <button
            onClick={handleNeededMost}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              neededMost ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Wherever Needed Most
          </button>
          <button
            onClick={handleFidya}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              fidyah ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Fidyah
          </button>
          <button
            onClick={handleKaffarah}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              kaffarah ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Kafarrah
          </button>
          <button
            onClick={handleSudanAppeal}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              sudanAppeal
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Sudan Emergency Appeal
          </button>
          <button
            onClick={handleSyriaAppeal}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              syriaAppeal
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Syria Crises Appeal
          </button>
          <button
            onClick={handleYemenAppeal}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              yemenAppeal
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Yemen Appeal
          </button>
          <button
            onClick={handleWaterForLife}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              waterForLife
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Water For Life
          </button>
          <button
            onClick={handleOrphansAndChildren}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              orphansAndChildren
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Orphans And Children
          </button>
          <button
            onClick={handleSadaqahJaria}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              sadaqahJariya
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Sadaqah Jariyah
          </button>
          <button
            onClick={handlePeopleInDebt}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              peopleInDebt
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            People In Debt
          </button>
          <button
            onClick={handleWaqf}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              waqf ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Waqf
          </button>
          <button
            onClick={handleInterest}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              interest ? 'bg-[#01aef0] text-white' : 'bg-white text-[#555555]'
            }`}
          >
            Interest[RIBA]
          </button>
          <button
            onClick={handleHumanitarians}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white ${
              humanitarians
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Capacity Building For Humanitarians
          </button>
          <button
            onClick={handleGlobalEmergencies}
            className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white block md:hidden ${
              globalEmergencies
                ? 'bg-[#01aef0] text-white'
                : 'bg-white text-[#555555]'
            }`}
          >
            Global Emergencies
          </button>
        </div>
        <button
          onClick={handleGlobalEmergencies}
          className={`py-3 font-semibold hover:bg-[#01aef0] hover:text-white mt-4 w-[50%] mx-auto md:block hidden ${
            globalEmergencies
              ? 'bg-[#01aef0] text-white'
              : 'bg-white text-[#555555]'
          }`}
        >
          Global Emergencies
        </button>
        {emergencyAppeal && <EmergencyAppeal />}
        {zakat && <Zakat />}
        {sadaqah && <Sadaqah />}
        {neededMost && <NeededMost />}
        {fidyah && <Fidyah />}
        {kaffarah && <Kaffarah />}
        {sudanAppeal && <SudanAppeal />}
        {syriaAppeal && <SyriaAppeal />}
        {yemenAppeal && <YemenAppeal />}
        {waterForLife && <WaterForLife />}
        {orphansAndChildren && <OrphansAndChildren />}
        {sadaqahJariya && <SadaqahJariya />}
        {peopleInDebt && <PeopleInDebt />}
        {waqf && <Waqf />}
        {interest && <Interest />}
        {humanitarians && <Humanitarians />}
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

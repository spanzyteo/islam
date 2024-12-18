'use client'
import { useState } from 'react'
import { yemenAppeal } from '@/app/(main)/data/OneOffData'
import { useFund } from '@/app/(main)/utils/Context'

const YemenAppeal = () => {
  const { state, dispatch } = useFund()
  const [selectedSection, setSelectedSection] = useState('USD')
  const [donateAmount, setDonateAmount] = useState<number | null>(150)
  const [isOther, setIsOther] = useState(false)
  const [otherAmount, setOtherAmount] = useState<number | null>(null)

  const filteredYemenAppeal = yemenAppeal.filter(
    (item) => item.section === selectedSection
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setOtherAmount(value === '' ? null : Number(value))
    dispatch({
      type: 'SET_HUMANITARIANS_AMOUNT',
      payload: value === '' ? null : Number(value),
    })
  }

  const handleAmountClick = (amount: number) => {
    setIsOther(false)
    dispatch({
      type: 'SET_HUMANITARIANS_AMOUNT',
      payload: amount,
    })
  }

  return (
    <>
      <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-8">
        Donation Amount
      </h1>
      <div className="flex items-center gap-4 mt-4 justify-center text-2xl text-[#b6b6b6] font-semibold">
        <button
          onClick={() =>
            dispatch({ type: 'SET_SELECTED_SECTION', payload: 'USD' })
          }
          className={`${
            state.selectedSection === 'USD' ? 'text-black' : 'text-[#b6b6b6]'
          }`}
        >
          USD
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'SET_SELECTED_SECTION', payload: 'GBP' })
          }
          className={`${
            state.selectedSection === 'GBP' ? 'text-black' : 'text-[#b6b6b6]'
          }`}
        >
          GBP
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'SET_SELECTED_SECTION', payload: 'EUR' })
          }
          className={`${
            state.selectedSection === 'EUR' ? 'text-black' : 'text-[#b6b6b6]'
          }`}
        >
          EUR
        </button>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-8">
        {filteredYemenAppeal.map((item) => (
          <>
            <div
              key={item.id}
              className="flex md:flex-row flex-col items-center justify-center gap-10"
            >
              <button
                onClick={() => {
                  handleAmountClick(200)
                }}
                className={`p-4 px-10 font-bold text-4xl hover:bg-[#01aef0] hover:text-white w-full md:w-auto ${
                  state.humanitariansAmount === 200
                    ? 'bg-[#01aef0] text-white'
                    : 'bg-white text-[#555555]'
                }`}
              >
                {item.amount1}
              </button>
              <button
                onClick={() => {
                  handleAmountClick(150)
                }}
                className={`p-4 px-10 font-bold text-4xl hover:bg-[#01aef0] hover:text-white w-full md:w-auto ${
                  state.humanitariansAmount === 150
                    ? 'bg-[#01aef0] text-white'
                    : 'bg-white text-[#555555]'
                }`}
              >
                {item.amount2}
              </button>
              <button
                onClick={() => {
                  handleAmountClick(100)
                }}
                className={`p-4 px-10 font-bold text-4xl hover:bg-[#01aef0] hover:text-white w-full md:w-auto ${
                  state.humanitariansAmount === 100
                    ? 'bg-[#01aef0] text-white'
                    : 'bg-white text-[#555555]'
                }`}
              >
                {item.amount3}
              </button>
              <button
                onClick={() => {
                  setIsOther(true)
                  dispatch({
                    type: 'SET_HUMANITARIANS_AMOUNT',
                    payload: null,
                  })
                }}
                className={`p-4 px-10 font-bold text-4xl hover:bg-[#01aef0] hover:text-white w-full md:w-auto ${
                  isOther
                    ? ' bg-[#01aef0] text-white'
                    : 'bg-white text-[#555555]'
                }`}
              >
                {item.other}
              </button>
            </div>
            {isOther && (
              <div className="mt-4 w-full">
                <input
                  type="number"
                  value={otherAmount === null ? '' : otherAmount}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                  className="w-full p-4 outline-[#01aef0] placeholder:text-2xl text-2xl"
                />
              </div>
            )}
            <div className="text-lg text-[#555555]">
              Making a donation of {state.humanitariansAmount || otherAmount}{' '}
              will help save lives
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default YemenAppeal

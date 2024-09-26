import { useState } from 'react'
import { orphansAndChildren } from '@/app/(main)/data/OneOffData'

const OrphansAndChildren = () => {
  const [selectedSection, setSelectedSection] = useState('USD')
  const [donateAmount, setDonateAmount] = useState<number | null>(100)
  const [isOther, setIsOther] = useState(false)
  const [otherAmount, setOtherAmount] = useState<number | null>(null)

  const filteredOrphansAndChildren = orphansAndChildren.filter(
    (item) => item.section === selectedSection
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setOtherAmount(value === '' ? null : Number(value))
  }

  return (
    <>
      <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-8">
        Donation Amount
      </h1>
      <div className="flex items-center gap-4 mt-4 justify-center text-2xl text-[#b6b6b6] font-semibold">
        <button
          onClick={() => setSelectedSection('USD')}
          className={`${
            selectedSection === 'USD' ? 'text-black' : 'text-[#b6b6b6]'
          }`}
        >
          USD
        </button>
        <button
          onClick={() => setSelectedSection('GBP')}
          className={`${
            selectedSection === 'GBP' ? 'text-black' : 'text-[#b6b6b6]'
          }`}
        >
          GBP
        </button>
        <button
          onClick={() => setSelectedSection('EUR')}
          className={`${
            selectedSection === 'EUR' ? 'text-black' : 'text-[#b6b6b6]'
          }`}
        >
          EUR
        </button>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-8">
        {filteredOrphansAndChildren.map((item) => (
          <>
            <div
              key={item.id}
              className="flex md:flex-row flex-col items-center justify-center gap-10"
            >
              <button
                onClick={() => {
                  setDonateAmount(150)
                  setIsOther(false)
                }}
                className={`p-4 px-10 font-bold text-4xl hover:bg-[#01aef0] hover:text-white w-full md:w-auto ${
                  donateAmount === 150
                    ? 'bg-[#01aef0] text-white'
                    : 'bg-white text-[#555555]'
                }`}
              >
                {item.amount1}
              </button>
              <button
                onClick={() => {
                  setDonateAmount(100)
                  setIsOther(false)
                }}
                className={`p-4 px-10 font-bold text-4xl hover:bg-[#01aef0] hover:text-white w-full md:w-auto ${
                  donateAmount === 100
                    ? 'bg-[#01aef0] text-white'
                    : 'bg-white text-[#555555]'
                }`}
              >
                {item.amount2}
              </button>
              <button
                onClick={() => {
                  setDonateAmount(50)
                  setIsOther(false)
                }}
                className={`p-4 px-10 font-bold text-4xl hover:bg-[#01aef0] hover:text-white w-full md:w-auto ${
                  donateAmount === 50
                    ? 'bg-[#01aef0] text-white'
                    : 'bg-white text-[#555555]'
                }`}
              >
                {item.amount3}
              </button>
              <button
                onClick={() => {
                  setIsOther(true)
                  setDonateAmount(null)
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
              Making a donation of {donateAmount || otherAmount} will help save
              lives
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default OrphansAndChildren

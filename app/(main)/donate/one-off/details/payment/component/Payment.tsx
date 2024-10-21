'use client'
import React, { useState } from 'react'
import { useFund } from '@/app/(main)/utils/Context'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Payment = () => {
  const { state, dispatch } = useFund()
  const [isChecked, setIsChecked] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState(false)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  const handleDonate = () => {
    setPaymentDetails((prev) => !prev)
  }

  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col px-10 rounded-md pb-10">
        <h1 className="text-[#01aef0] uppercase text-3xl font-bold mt-16 flex mx-auto">
          Payment
        </h1>
        <h1 className="mx-auto mt-4 text-gray-600 text-lg">
          Total Donation: xxxx
        </h1>
        <div className="flex flex-col justify-center mt-6">
          <div className="w-[100%] h-[3px] bg-[#d7d7d7]"></div>
          <div className="flex justify-between mt-4">
            <div className="text-gray-600 text-lg">{state.selectedFund}</div>
            <div className="text-gray-600 text-lg">$100</div>
          </div>
          <div className="w-[100%] h-[3px] bg-[#d7d7d7] mt-4"></div>
        </div>
        <div className="flex gap-4 mt-6 bg-white p-4 ">
          <input
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="h-[40px] w-[40px] mt-[-5px]"
          />
          <label
            htmlFor="checkbox"
            className="font-normal md:text-xl text-[#495057]"
          >
            We are charged a small fee of 1.4% on every transaction by our
            payment provider. Would you like to cover the transaction fee of
            2.10 so that we receive your full donation?{' '}
          </label>
        </div>
        <button
          onClick={handleDonate}
          className="bg-[#eb3223] p-3 px-2 mt-10 text-white uppercase text-2xl w-[250px] font-semibold mx-auto"
        >
          {paymentDetails ? 'Hide Details' : 'Donate Now'}
        </button>
        <AnimatePresence>
          {paymentDetails && (
            <motion.div
              className="w-[100%] bg-white flex flex-col mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={'/donate/one-off/details/payment/bank-payment'}>
                <h1 className="text-gray-600 text-lg ml-4 mt-4 cursor-pointer hover:text-[#01aef0] transition-all duration-300 ease-in-out ">
                  Bank Transfer
                </h1>
              </Link>
              <div className="w-[100%] h-[3px] bg-[#d7d7d7] mt-4"></div>
              <Link href={'/donate/one-off/details/payment/zelle-payment'}>
                <h1 className="text-gray-600 text-lg ml-4 mt-4 cursor-pointer hover:text-[#01aef0] transition-all duration-300 ease-in-out">
                  Zelle
                </h1>
              </Link>
              <div className="w-[100%] h-[3px] bg-[#d7d7d7] mt-4"></div>
              <Link href={'/donate/one-off/details/payment/venmo-payment'}>
                <h1 className="text-gray-600 text-lg ml-4 mt-4  cursor-pointer hover:text-[#01aef0] transition-all duration-300 ease-in-out">
                  Venmo
                </h1>
              </Link>
              <div className="w-[100%] h-[3px] bg-[#d7d7d7] mt-4"></div>
              <Link href={'/donate/one-off/details/payment/paypal-payment'}>
                <h1 className="text-gray-600 text-lg ml-4 mt-4 cursor-pointer hover:text-[#01aef0] transition-all duration-300 ease-in-out">
                  Paypal
                </h1>
              </Link>
              <div className="w-[100%] h-[3px] bg-[#d7d7d7] mt-4"></div>
              <Link href={'/donate/one-off/details/payment/cashapp-payment'}>
                <h1 className="text-gray-600 text-lg ml-4 mt-4 cursor-pointer hover:text-[#01aef0] transition-all duration-300 ease-in-out">
                  Cashapp 
                </h1>
              </Link>
              <div className="w-[100%] h-[3px] bg-[#d7d7d7] mt-4"></div>
              <Link href={'/donate/one-off/details/payment/bitcoin-payment'}>
                <h1 className="text-gray-600 text-lg ml-4 mt-4 cursor-pointer hover:text-[#01aef0] transition-all duration-300 ease-in-out">
                  Bitcoin
                </h1>
                <div className="w-[100%] h-[3px] bg-[#d7d7d7] mt-4"></div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Payment

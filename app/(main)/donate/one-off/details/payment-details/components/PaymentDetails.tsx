import React from 'react'
import Link from 'next/link'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa'

const PaymentDetails = () => {
  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col md:px-10 px-5 rounded-md pb-10 ">
        <h1 className="text-[#01aef0] uppercase text-4xl font-bold mt-16 text-center">
          Payment Details
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
            Bank Details
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Bank Name: <span className="font-thin">XXXX XXXX</span>
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Account Number: <span className="font-thin">XXXX XXXX</span>
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Swift Code: <span className="font-thin">XXXX XXXX</span>
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            IBAN: <span className="font-thin">XXXX XXXX</span>
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Bank Address: <span className="font-thin">XXXX XXXX</span>
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Receivers Address: <span className="font-thin">XXXX XXXX</span>
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Receivers Phone: <span className="font-thin">XXXX XXXX</span>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
            Zelle Details
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Name: <span className="font-thin">XXXX XXXX</span>
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Email: <span className="font-thin">XXXX XXXX</span>
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Phone Number: <span className="font-thin">XXXX XXXX</span>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
            Venmo Details
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Username: <span className="font-thin">XXXX XXXX</span>
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Last Four Digits: <span className="font-thin">XXXX</span>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
            Paypal
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Email: <span className="font-thin">XXXX XXXX</span>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
            Cashapp Name
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Cashtag: <span className="font-thin">XXXX XXXX</span>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
            Bitcoin
          </h1>
          <h1 className="text-[#495057] font-semibold text-xl">
            Bitcoin address: <span className="font-thin">XXXX XXXX</span>
          </h1>
        </div>
        <div className="flex items-center justify-between mt-8">
          <Link href={'/donate/one-off/details'}>
            <button
              type="button"
              className="text-2xl font-bold bg-white flex items-center p-2 px-4 gap-2 text-[#A7A7A7] hover:bg-gray-300 hover:text-[#555555] transition-all duration-300 ease-in-out"
            >
              <FaRegArrowAltCircleLeft className="h-[30px] w-[30px]" />{' '}
              <h1>BACK</h1>
            </button>
          </Link>
          <Link
            href={'/donate/one-off/details/payment-details/proof-of-payment'}
          >
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

export default PaymentDetails

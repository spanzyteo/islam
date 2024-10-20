'use client'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/app/(admin)/admin/utils/apiConfig'
import axios from 'axios'
import Link from 'next/link'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa'

const PaypalPayment = () => {
  const [paypalDetails, setPaypalDetails] = useState<any[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPaypalDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/paypal-details`)
        if (response.data.success && response.data.data.length > 0) {
          setPaypalDetails([response.data.data[0]])
        } else {
          setError('No Paypal details available')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch Paypal details'
        )
      }
    }

    fetchPaypalDetails()
  }, [])

  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col md:px-10 px-5 rounded-md pb-10 ">
        <h1 className="text-[#01aef0] uppercase text-4xl font-bold mt-16 text-center">
          Payment Details
        </h1>
        {paypalDetails.length > 0 && (
          <div className="flex flex-col gap-2">
            <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
              Paypal
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Email: <span className="font-thin">{paypalDetails[0].email}</span>
            </h1>
          </div>
        )}
        <div className="flex items-center justify-between mt-8">
          <Link href={'/donate/monthly/details/payment'}>
            <button
              type="button"
              className="text-2xl font-bold bg-white flex items-center p-2 px-4 gap-2 text-[#A7A7A7] hover:bg-gray-300 hover:text-[#555555] transition-all duration-300 ease-in-out"
            >
              <FaRegArrowAltCircleLeft className="h-[30px] w-[30px]" />{' '}
              <h1>BACK</h1>
            </button>
          </Link>
          <Link href={'/donate/monthly/details/payment/proof-of-payment'}>
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

export default PaypalPayment

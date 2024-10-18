'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa'
import { BASE_URL } from '@/app/(admin)/admin/utils/apiConfig'
import axios from 'axios'

const PaymentDetails = () => {
  const [bankDetails, setBankDetails] = useState<any[]>([])
  const [zelleDetails, setZelleDetails] = useState<any[]>([])
  const [venmoDetails, setVenmoDetails] = useState<any[]>([])
  const [paypalDetails, setPaypalDetails] = useState<any[]>([])
  const [cashappDetails, setCashappDetails] = useState<any[]>([])
  const [bitcoinDetails, setBitcoinDetails] = useState<any[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/bank-details`)
        if (response.data.success && response.data.data.length > 0) {
          setBankDetails([response.data.data[0]]) // Set the entire array
          console.log([response.data.data[0]])
        } else {
          setError('No bank details available')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch bank details'
        )
      }
    }

    const fetchZelleDetails = async () => {
      try {
        // Replace with actual API endpoint for Zelle details
        const response = await axios.get(`${BASE_URL}/api/zelle-details`)
        if (response.data.success && response.data.data.length > 0) {
          setZelleDetails([response.data.data[0]]) // Set the entire array
        } else {
          setError('No Zelle details available')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch Zelle details'
        )
      }
    }

    const fetchVenmoDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/venmo-details`)
        if (response.data.success && response.data.data.length > 0) {
          setVenmoDetails([response.data.data[0]]) // Set the entire array
        } else {
          setError('No Venmo details available')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch Venmo details'
        )
      }
    }

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

    const fetchCashappDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/cashapp-details`)
        if (response.data.success && response.data.data.length > 0) {
          setCashappDetails([response.data.data[0]])
        } else {
          setError('No Cashapp details available')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch cashapp details'
        )
      }
    }

    const fetchBitcoinDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/bitcoin-details`)
        if (response.data.success && response.data.data.length > 0) {
          setBitcoinDetails([response.data.data[0]])
        } else {
          setError('No Bitcoin details available')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch bitcoin details'
        )
      }
    }

    Promise.all([
      fetchBankDetails(),
      fetchZelleDetails(),
      fetchVenmoDetails(),
      fetchPaypalDetails(),
      fetchCashappDetails(),
      fetchBitcoinDetails(),
    ])
  }, [])

  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col md:px-10 px-5 rounded-md pb-10 ">
        <h1 className="text-[#01aef0] uppercase text-4xl font-bold mt-16 text-center">
          Payment Details
        </h1>
        {/* Bank details */}
        {bankDetails.length > 0 && (
          <div className="flex flex-col gap-2">
            <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
              Bank Details
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Bank Name:{' '}
              <span className="font-normal">{bankDetails[0].bankname}</span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Account Number:{' '}
              <span className="font-normal">
                {bankDetails[0].accountnumber}
              </span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Swift Code:{' '}
              <span className="font-normal">{bankDetails[0].swiftcode}</span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              IBAN: <span className="font-normal">{bankDetails[0].iban}</span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Bank Address:{' '}
              <span className="font-normal">{bankDetails[0].bankaddress}</span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Receivers Address:{' '}
              <span className="font-normal">
                {bankDetails[0].receiveraddress}
              </span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Receivers Phone:{' '}
              <span className="font-normal">
                {bankDetails[0].receiverphone}
              </span>
            </h1>
          </div>
        )}
        {/* zelle details */}
        {zelleDetails.length > 0 && (
          <div className="flex flex-col gap-2">
            <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
              Zelle Details
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Name: <span className="font-normal">{zelleDetails[0].name}</span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Email:{' '}
              <span className="font-normal">{zelleDetails[0].email}</span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Phone Number:{' '}
              <span className="font-normal">{zelleDetails[0].phone}</span>
            </h1>
          </div>
        )}
        {venmoDetails.length > 0 && (
          <div className="flex flex-col gap-2">
            <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
              Venmo Details
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Username:{' '}
              <span className="font-normal">{venmoDetails[0].username}</span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Last Four Digits:{' '}
              <span className="font-normal">
                {venmoDetails[0].lastfourdigits}
              </span>
            </h1>
          </div>
        )}
        {paypalDetails.length > 0 && (
          <div className="flex flex-col gap-2">
            <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
              Paypal
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Email: <span className="font-normal">{paypalDetails[0].email}</span>
            </h1>
          </div>
        )}
        {cashappDetails.length > 0 && (
          <div className="flex flex-col gap-2">
            <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
              Cashapp
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Cashapp name:{' '}
              <span className="font-normal">{cashappDetails[0].name}</span>
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Cashtag:{' '}
              <span className="font-normal">{cashappDetails[0].cashtag}</span>
            </h1>
          </div>
        )}
        {bitcoinDetails.length > 0 && (
          <div className="flex flex-col gap-2">
            <h1 className="text-[#01aef0] uppercase text-2xl font-bold mt-16">
              Bitcoin
            </h1>
            <h1 className="text-[#495057] font-semibold text-xl">
              Bitcoin address:{' '}
              <span className="font-normal">
                {bitcoinDetails[0].bitcoinaddress}
              </span>
            </h1>
          </div>
        )}
        <div className="flex items-center justify-between mt-8">
          <Link href={'/donate/monthly/details'}>
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

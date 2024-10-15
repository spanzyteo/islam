'use client'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/apiConfig'
import axios from 'axios'
import Image from 'next/image'

const ViewPaymentProof = () => {
  const [paymentProof, setPaymentProof] = useState<any[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPaymentProof = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/payment-details`)
        console.log(response.data.data);
        if (response.data.success && response.data.data.length > 0) {
          setPaymentProof(response.data.data)
        } else {
          setError('No payment proof available')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch bank details'
        )
      }
    }

    fetchPaymentProof()
  }, [])

  const deletePaymentProof = async (id: string | number) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/delete-payment-details/${id}`)
      console.log(response.data)
      if (response.data) {
        setPaymentProof((prevDetails) => prevDetails.filter((proof) => proof.id !== id))
        console.log('Payment proof deleted successfully')
      }else {
        setError('Failed to delete payment detail')
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete bank detail')
    }
  }
  return (
    <div className="bg-[#F2F2F2] min-h-screen p-4">
      <div className="md:ml-[400px] ml-[1rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[1rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            User Payments
          </h1>
          {paymentProof.length > 0 ? (
            <div className="mt-6 bg-white shadow-md p-4 overflow-x-auto">
              {/* Table structure */}
              <div className="table w-full border-collapse border border-gray-300">
                {/* Table Header */}
                <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                  <div className="table-cell p-2 md:p-4 border border-gray-300">
                    UserId
                  </div>
                  <div className="table-cell p-2 md:p-4 border border-gray-300">
                    Created at
                  </div>
                  <div className="table-cell p-2 md:p-4 border border-gray-300">
                    Updated at
                  </div>
                  <div className="table-cell p-2 md:p-4 border border-gray-300">
                    Proof of Payment
                  </div>
                  <div className="table-cell p-2 md:p-4 border border-gray-300">
                    Action
                  </div>
                </div>
                {/* Table Rows with Random Values */}
                {paymentProof.map((item) => (
                  <div key={item.id} className="table-row text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {item.id}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {item.created_at}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {item.updated_at}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300 underline text-blue-700 font-semibold">
                      {/* <Image src={item.imageLink} alt='img' width={50} height={50} objectFit='cover' className='w-[50px] h-[50px]'/> */}
                      <a href={item.imageLink}>
                        View
                      </a>
                    </div>
                    <div onClick={() => deletePaymentProof(item.id)} className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer">
                      Delete
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>There is no payment proof</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewPaymentProof

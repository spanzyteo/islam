'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/apiConfig'
import ZelleDetails from './component/ZelleDetails'

const ViewPayment = () => {
  const [bankDetails, setBankDetails] = useState<any[]>([]) // Store the entire array of bank details
  const [zelleDetails, setZelleDetails] = useState<any[]>([]) // Store the entire array of Zelle details
  const [venmoDetails, setVenmoDetails] = useState<any[]>([]) // Store the entire array of Zelle details
  const [paypalDetails, setPaypalDetails] = useState<any[]>([]) // Store the entire array of Zelle details
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchBankDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/bank-details`)
        if (response.data.success && response.data.data.length > 0) {
          setBankDetails(response.data.data) // Set the entire array
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
          setZelleDetails(response.data.data) // Set the entire array
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
        // Replace with actual API endpoint for Zelle details
        const response = await axios.get(`${BASE_URL}/api/venmo-details`)
        if (response.data.success && response.data.data.length > 0) {
          setVenmoDetails(response.data.data) // Set the entire array
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
        // Replace with actual API endpoint for Zelle details
        const response = await axios.get(`${BASE_URL}/api/paypal-details`)
        if (response.data.success && response.data.data.length > 0) {
          setPaypalDetails(response.data.data) // Set the entire array
        } else {
          setError('No Paypal details available')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch Paypal details'
        )
      }
    }


    Promise.all([fetchBankDetails(), fetchZelleDetails(), fetchVenmoDetails(), fetchPaypalDetails()]).finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:ml-[400px] ml-[3rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[3rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            Payment methods
          </h1>

          {/* Bank Details Section */}
          <div className="flex flex-col mt-6 bg-white shadow-md pb-10 overflow-auto">
            <div className="flex flex-col ml-4 mr-4">
              <h1 className="text-xl font-semibold text-gray-600 mt-2">
                Bank Details
              </h1>
              {bankDetails.length > 0 ? (
                <div className="table w-full border-collapse border border-gray-300">
                  {/* Table Header */}
                  <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Bank Name
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Account Number
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Swift Code
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      IBAN
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Bank Address
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Receiver's Address
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Receiver's Phone
                    </div>
                  </div>
                  {/* Table Rows */}
                  {bankDetails.map((bankDetail) => (
                    <div
                      key={bankDetail.id}
                      className="table-row text-sm md:text-base"
                    >
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {bankDetail.bankname}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {bankDetail.accountnumber}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {bankDetail.swiftcode}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {bankDetail.iban}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {bankDetail.bankaddress}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {bankDetail.receiveraddress}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {bankDetail.receiverphone}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="table-row">
                  <div className="table-cell p-2 md:p-4 border border-gray-300 text-center w-full">
                    No bank details available
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Zelle Details Section */}
          <div className="flex flex-col mt-6 bg-white shadow-md pb-10 overflow-auto">
            <div className="flex flex-col ml-4 mr-4">
              <h1 className="text-xl font-semibold text-gray-600 mt-2">
                Zelle Details
              </h1>
              {zelleDetails.length > 0 ? (
                <div className="table w-full border-collapse border border-gray-300">
                  {/* Table Header */}
                  <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Name
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Email
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Phone Number
                    </div>
                  </div>
                  {/* Table Rows */}
                  {zelleDetails.map((zelleDetail) => (
                    <div
                      key={zelleDetail.id}
                      className="table-row text-sm md:text-base"
                    >
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {zelleDetail.name}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {zelleDetail.email}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {zelleDetail.phone}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="table-row">
                  <div className="table-cell p-2 md:p-4 border border-gray-300 text-center w-full">
                    No Zelle details available
                  </div>
                </div>
              )}
              {/* Dummy Write Up */}
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <p className="text-sm text-gray-600">
                  Here you can find the Zelle details used for transactions.
                  Please ensure to verify the details before sending any
                  payments. If you have any questions, feel free to reach out to
                  our support team.
                </p>
              </div>
            </div>
          </div>

          {/* Venmo Details Section */}
          <div className="flex flex-col mt-6 bg-white shadow-md pb-10 overflow-auto">
            <div className="flex flex-col ml-4 mr-4">
              <h1 className="text-xl font-semibold text-gray-600 mt-2">
                Venmo Details
              </h1>
              {zelleDetails.length > 0 ? (
                <div className="table w-full border-collapse border border-gray-300">
                  {/* Table Header */}
                  <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Username
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Last Four Digits
                    </div>
                  </div>
                  {/* Table Rows */}
                  {venmoDetails.map((venmoDetail) => (
                    <div
                      key={venmoDetail.id}
                      className="table-row text-sm md:text-base"
                    >
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {venmoDetail.username}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {venmoDetail.lastfourdigits}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="table-row">
                  <div className="table-cell p-2 md:p-4 border border-gray-300 text-center w-full">
                    No Venmo details available
                  </div>
                </div>
              )}
              {/* Dummy Write Up */}
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <p className="text-sm text-gray-600">
                  Here you can find the Venmo details used for transactions.
                  Please ensure to verify the details before sending any
                  payments. If you have any questions, feel free to reach out to
                  our support team.
                </p>
              </div>
            </div>
          </div>

          {/* Paypal Details Section */}
          <div className="flex flex-col mt-6 bg-white shadow-md pb-10 overflow-auto">
            <div className="flex flex-col ml-4 mr-4">
              <h1 className="text-xl font-semibold text-gray-600 mt-2">
                Paypal Details
              </h1>
              { paypalDetails.length > 0 ? (
                <div className="table w-full border-collapse border border-gray-300">
                  {/* Table Header */}
                  <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Email
                    </div>
                  </div>
                  {/* Table Rows */}
                  {paypalDetails.map((paypalDetail) => (
                    <div
                      key={paypalDetail.id}
                      className="table-row text-sm md:text-base"
                    >
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {paypalDetail.email}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="table-row">
                  <div className="table-cell p-2 md:p-4 border border-gray-300 text-center w-full">
                    No Paypal details available
                  </div>
                </div>
              )}
              {/* Dummy Write Up */}
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <p className="text-sm text-gray-600">
                  Here you can find the Paypal details used for transactions.
                  Please ensure to verify the details before sending any
                  payments. If you have any questions, feel free to reach out to
                  our support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPayment

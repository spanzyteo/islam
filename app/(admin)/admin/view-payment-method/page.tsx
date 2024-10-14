'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/apiConfig'
import { useRouter } from 'next/navigation'

const ViewPayment = () => {
  const router = useRouter()
  const [bankDetails, setBankDetails] = useState<any[]>([])
  const [zelleDetails, setZelleDetails] = useState<any[]>([])
  const [venmoDetails, setVenmoDetails] = useState<any[]>([])
  const [paypalDetails, setPaypalDetails] = useState<any[]>([])
  const [cashappDetails, setCashappDetails] = useState<any[]>([])
  const [bitcoinDetails, setBitcoinDetails] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const handleBankEdit = (id: string) => {
    router.push(`/admin/view-payment-method/edit-bank-details/${id}`)
  }

  const handleZelleEdit = (id: string) => {
    router.push(`/admin/view-payment-method/edit-zelle-details/${id}`)
  }

  const handleVenmoEdit = (id: string) => {
    router.push(`/admin/view-payment-method/edit-venmo-details/${id}`)
  }

  const handlePaypalEdit = (id: string) => {
    router.push(`/admin/view-payment-method/edit-paypal-details/${id}`)
  }

  const handleCashappEdit = (id: string) => {
    router.push(`/admin/view-payment-method/edit-cashapp-details/${id}`)
  }

  const handleBitcoinEdit = (id: string) => {
    router.push(`/admin/view-payment-method/edit-bitcoin-details/${id}`)
  }
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

    const fetchCashappDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/cashapp-details`)
        if (response.data.success && response.data.data.length > 0) {
          setCashappDetails(response.data.data)
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
          setBitcoinDetails(response.data.data)
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
    ]).finally(() => {
      setLoading(false)
    })
  }, [])

  const deleteBankDetails = async (id: string | number) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/delete-bank-details/${id}`
      )
      console.log(response.data)
      if (response.data) {
        setBankDetails((prevDetails) =>
          prevDetails.filter((bankDetail) => bankDetail.id !== id)
        )
        console.log('Bank detail deleted successfully')
      } else {
        setError('Failed to delete bank detail')
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete bank detail')
    }
  }

  const deleteZelleDetails = async (id: string | number) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/delete-zelle-details/${id}`
      )
      if (response.data) {
        setZelleDetails((prevDetails) =>
          prevDetails.filter((zelleDetail) => zelleDetail.id !== id)
        )
        console.log('Zelle detail deleted successfully')
      } else {
        setError('Failed to delete zelle detail')
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete zelle detail')
    }
  }

  const deleteVenmoDetails = async (id: string | number) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/delete-venmo-details/${id}`
      )
      if (response.data) {
        setVenmoDetails((prevDetails) =>
          prevDetails.filter((venmoDetail) => venmoDetail.id !== id)
        )
      } else {
        setError('Failed to delete venmo detail')
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete venmo detail')
    }
  }

  const deletePaypalDetails = async (id: string | number) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/delete-paypal-details/${id}`
      )
      console.log(response.data)
      if (response.data) {
        setPaypalDetails((prevDetails) =>
          prevDetails.filter((paypalDetail) => paypalDetail.id !== id)
        )
      } else {
        setError('Failed to delete paypal detail')
      }
    } catch (error: any) {
      setError(
        error.response?.data?.message || 'Failed to delete paypal detail'
      )
    }
  }

  const deleteCashappDetails = async (id: string | number) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/delete-cashapp-details/${id}`
      )
      console.log(response.data)
      if (response.data) {
        setCashappDetails((prevDetails) =>
          prevDetails.filter((cashappDetail) => cashappDetail.id !== id)
        )
      } else {
        setError('Failed to delete cashapp detail')
      }
    } catch (error: any) {
      setError(
        error.response?.data?.message || 'Failed to delete cashapp detail'
      )
    }
  }

  const deleteBitcoinDetails = async (id: string | number) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/delete-bitcoin-details/${id}`
      )
      if (response.data) {
        setBitcoinDetails((prevDetails) =>
          prevDetails.filter((bitcoinDetail) => bitcoinDetail.id !== id)
        )
      } else {
        setError('Failed to delete bitcoin detail')
      }
    } catch (error: any) {
      setError(
        error.response?.data?.message || 'Failed to delete bitcoin detail'
      )
    }
  }

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
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
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
                      <div
                        onClick={() => deleteBankDetails(bankDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Delete
                      </div>
                      <div
                        onClick={() => handleBankEdit(bankDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Edit
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
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
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
                      <div
                        onClick={() => deleteZelleDetails(zelleDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Delete
                      </div>
                      <div
                        onClick={() => handleZelleEdit(zelleDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Edit
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
              {venmoDetails.length > 0 ? (
                <div className="table w-full border-collapse border border-gray-300">
                  {/* Table Header */}
                  <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Username
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Last Four Digits
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
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
                      <div
                        onClick={() => deleteVenmoDetails(venmoDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Delete
                      </div>
                      <div
                        onClick={() => handleVenmoEdit(venmoDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Edit
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
              {paypalDetails.length > 0 ? (
                <div className="table w-full border-collapse border border-gray-300">
                  {/* Table Header */}
                  <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Email
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
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
                      <div
                        onClick={() => deletePaypalDetails(paypalDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Delete
                      </div>
                      <div
                        onClick={() => handlePaypalEdit(paypalDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Edit
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

          {/* Cashapp Details Section */}
          <div className="flex flex-col mt-6 bg-white shadow-md pb-10 overflow-auto">
            <div className="flex flex-col ml-4 mr-4">
              <h1 className="text-xl font-semibold text-gray-600 mt-2">
                Cashapp Details
              </h1>
              <h1 className="text-xl font-semibold text-gray-600 mt-2">
                Action
              </h1>
              {cashappDetails.length > 0 ? (
                <div className="table w-full border-collapse border border-gray-300">
                  {/* Table Header */}
                  <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Name
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Cashtag
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
                    </div>
                  </div>
                  {/* Table Rows */}
                  {cashappDetails.map((cashappDetail) => (
                    <div
                      key={cashappDetail.id}
                      className="table-row text-sm md:text-base"
                    >
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {cashappDetail.name}
                      </div>
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {cashappDetail.cashtag}
                      </div>
                      <div
                        onClick={() => deleteCashappDetails(cashappDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Delete
                      </div>
                      <div
                        onClick={() => handleCashappEdit(cashappDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Edit
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="table-row">
                  <div className="table-cell p-2 md:p-4 border border-gray-300 text-center w-full">
                    No Cashapp details available
                  </div>
                </div>
              )}
              {/* Dummy Write Up */}
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <p className="text-sm text-gray-600">
                  Here you can find the Cashapp details used for transactions.
                  Please ensure to verify the details before sending any
                  payments. If you have any questions, feel free to reach out to
                  our support team.
                </p>
              </div>
            </div>
          </div>

          {/* Bitcoin Details Section */}
          <div className="flex flex-col mt-6 bg-white shadow-md pb-10 overflow-auto">
            <div className="flex flex-col ml-4 mr-4">
              <h1 className="text-xl font-semibold text-gray-600 mt-2">
                Bitcoin Details
              </h1>
              {bitcoinDetails.length > 0 ? (
                <div className="table w-full border-collapse border border-gray-300">
                  {/* Table Header */}
                  <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Bitcoin Address
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      Action
                    </div>
                  </div>
                  {/* Table Rows */}
                  {bitcoinDetails.map((bitcoinDetail) => (
                    <div
                      key={bitcoinDetail.id}
                      className="table-row text-sm md:text-base"
                    >
                      <div className="table-cell p-2 md:p-4 border border-gray-300">
                        {bitcoinDetail.bitcoinaddress}
                      </div>
                      <div
                        onClick={() => deleteBitcoinDetails(bitcoinDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Delete
                      </div>
                      <div
                        onClick={() => handleBitcoinEdit(bitcoinDetail.id)}
                        className="table-cell p-2 md:p-4 border border-gray-300 cursor-pointer"
                      >
                        Edit
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="table-row">
                  <div className="table-cell p-2 md:p-4 border border-gray-300 text-center w-full">
                    No Bitcoin details available
                  </div>
                </div>
              )}
              {/* Dummy Write Up */}
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <p className="text-sm text-gray-600">
                  Here you can find the Bitvoin details used for transactions.
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

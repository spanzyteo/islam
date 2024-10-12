'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { BASE_URL } from '../../../utils/apiConfig'

const EditBankDetails = () => {
  const { id } = useParams()
  const router = useRouter()

  const [bankDetail, setBankDetail] = useState({
    bankname: '',
    accountnumber: '',
    swiftcode: '',
    iban: '',
    bankaddress: '',
    receiveraddress: '',
    receiverphone: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (id) {
      // Fetch the bank detail by ID
      const fetchBankDetail = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/api/bank-details/${id}`)
          if (response.data.success) {
            setBankDetail(response.data.data) 
            setLoading(false)
          } else {
            setError('Failed to fetch bank detail')
          }
        } catch (error: any) {
          setError(
            error.response?.data?.message || 'Failed to fetch bank detail'
          )
          setLoading(false)
        }
      }
      fetchBankDetail()
    }
  }, [id])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true) // Set saving state to true during the request
    try {
      const response = await axios.put(
        `${BASE_URL}/api/bank-detailsupdate/${id}`,
        bankDetail
      )
      if (response.data) {
        alert('Bank details updated successfully!')
        router.push('/admin/view-payment-method') 
      } else {
        setError('Failed to update bank details')
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to update bank details')
    } finally {
      setSaving(false) // Reset saving state
    }
  }
  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:ml-[400px] ml-[3rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[3rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            Edit Bank Details
          </h1>

          <div className="flex flex-col mt-6 bg-white shadow-md pb-10">
            <div className="flex flex-col ml-4">
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-semibold text-gray-600 mt-2">
                  Bank Details
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="first_name"
                    className="text-[#495057] font-semibold"
                  >
                    Bank Name
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankname"
                    value={bankDetail.bankname}
                    onChange={(e) =>
                      setBankDetail({ ...bankDetail, bankname: e.target.value })
                    }
                    placeholder="Bank Name"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="account_number"
                    className="text-[#495057] font-semibold"
                  >
                    Account Number
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="number"
                    name="accountnumber"
                    value={bankDetail.accountnumber}
                    onChange={(e) =>
                      setBankDetail({
                        ...bankDetail,
                        accountnumber: e.target.value,
                      })
                    }
                    placeholder="Account Number"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="swift_code"
                    className="text-[#495057] font-semibold"
                  >
                    Swift Code
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="number"
                    name="swiftcode"
                    value={bankDetail.swiftcode}
                    onChange={(e) =>
                      setBankDetail({
                        ...bankDetail,
                        swiftcode: e.target.value,
                      })
                    }
                    placeholder="Swift code"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="iban"
                    className="text-[#495057] font-semibold"
                  >
                    IBAN
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="number"
                    name="iban"
                    value={bankDetail.iban}
                    onChange={(e) =>
                      setBankDetail({
                        ...bankDetail,
                        iban: e.target.value,
                      })
                    }
                    placeholder="IBAN"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="bank_address"
                    className="text-[#495057] font-semibold"
                  >
                    Bank Address
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankaddress"
                    value={bankDetail.bankaddress}
                    onChange={(e) =>
                      setBankDetail({
                        ...bankDetail,
                        bankaddress: e.target.value,
                      })
                    }
                    placeholder="Bank Address"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="receivers_address"
                    className="text-[#495057] font-semibold"
                  >
                    Receivers Address
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    name="receiveraddress"
                    value={bankDetail.receiveraddress}
                    onChange={(e) =>
                      setBankDetail({
                        ...bankDetail,
                        receiveraddress: e.target.value,
                      })
                    }
                    placeholder="Receivers Address"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="receivers_phone"
                    className="text-[#495057] font-semibold"
                  >
                    Receivers Phone
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="number"
                    name="receiverphone"
                    value={bankDetail.receiverphone}
                    onChange={(e) =>
                      setBankDetail({
                        ...bankDetail,
                        receiverphone: e.target.value,
                      })
                    }
                    placeholder="Receivers Phone"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditBankDetails

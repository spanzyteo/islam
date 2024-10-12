'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { BASE_URL } from '../../../utils/apiConfig'

const EditPaypalDetails = () => {
  const { id } = useParams()
  const router = useRouter()

  const [paypalDetail, setPaypalDetail] = useState({
    email: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (id) {
      // Fetch the bank detail by ID
      const fetchPaypalDetail = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/api/paypal-details/${id}`)
          if (response.data.success) {
            setPaypalDetail(response.data.data)
            setLoading(false)
          } else {
            setError('Failed to fetch paypal detail')
          }
        } catch (error: any) {
          setError(
            error.response?.data?.message || 'Failed to fetch paypal detail'
          )
          setLoading(false)
        }
      }
      fetchPaypalDetail()
    }
  }, [id])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true) // Set saving state to true during the request
    try {
      const response = await axios.put(
        `${BASE_URL}/api/paypal-details/${id}`,
        paypalDetail
      )
      if (response.data) {
        alert('Paypal details updated successfully!')
        router.push('/admin/view-payment-method') 
      } else {
        setError('Failed to update paypal details')
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to update paypal details')
    } finally {
      setSaving(false) // Reset saving state
    }
  }

  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:ml-[400px] ml-[3rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[3rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            Edit Paypal Details
          </h1>

          <div className="flex flex-col mt-6 bg-white shadow-md pb-10">
            <div className="flex flex-col ml-4">
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-semibold text-gray-600 mt-2">
                  Paypal Details
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="email"
                    className="text-[#495057] font-semibold"
                  >
                    Email
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={paypalDetail.email}
                    onChange={(e) =>
                      setPaypalDetail({
                        ...paypalDetail,
                        email: e.target.value,
                      })
                    }
                    placeholder="Email"
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

export default EditPaypalDetails

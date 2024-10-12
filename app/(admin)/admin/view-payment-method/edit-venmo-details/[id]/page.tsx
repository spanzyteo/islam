'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { BASE_URL } from '../../../utils/apiConfig'

const EditVenmoDetail = () => {
  const { id } = useParams()
  const router = useRouter()

  const [venmoDetail, setVenmoDetail] = useState({
   username: '',
   lastfourdigits: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (id) {
      // Fetch the bank detail by ID
      const fetchVenmoDetail = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/api/venmo-details/${id}`)
          if (response.data.success) {
            setVenmoDetail(response.data.data) 
            setLoading(false)
          } else {
            setError('Failed to fetch venmo detail')
          }
        } catch (error: any) {
          setError(
            error.response?.data?.message || 'Failed to fetch venmo detail'
          )
          setLoading(false)
        }
      }
      fetchVenmoDetail()
    }
  }, [id])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true) // Set saving state to true during the request
    try {
      const response = await axios.put(
        `${BASE_URL}/api/venmo-details/${id}`,
        venmoDetail
      )
      if (response.data) {
        alert('Venmo details updated successfully!')
        router.push('/admin/view-payment-method') 
      } else {
        setError('Failed to update venmo details')
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to update venmo details')
    } finally {
      setSaving(false) // Reset saving state
    }
  }

  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:ml-[400px] ml-[3rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[3rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            Edit Venmo Details
          </h1>

          <div className="flex flex-col mt-6 bg-white shadow-md pb-10">
            <div className="flex flex-col ml-4">
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-semibold text-gray-600 mt-2">
                  Venmo Details
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="Username"
                    className="text-[#495057] font-semibold"
                  >
                    Username
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={venmoDetail.username}
                    onChange={(e) =>
                      setVenmoDetail({
                        ...venmoDetail,
                        username: e.target.value,
                      })
                    }
                    placeholder="Username"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="lastfourdigits"
                    className="text-[#495057] font-semibold"
                  >
                    Last Four Digits
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    pattern="\d{4}"
                    name="lastfourdigits"
                    value={venmoDetail.lastfourdigits}
                    onChange={(e) =>
                      setVenmoDetail({
                        ...venmoDetail,
                        lastfourdigits: e.target.value,
                      })
                    }
                    placeholder="Last Four Digits"
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

export default EditVenmoDetail

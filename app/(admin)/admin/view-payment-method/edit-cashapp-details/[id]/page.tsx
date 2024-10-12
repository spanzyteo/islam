'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { BASE_URL } from '../../../utils/apiConfig'

const EditCashappDetails = () => {
    const { id } = useParams()
    const router = useRouter()

    const [cashappDetail, setCashappDetail] = useState({
      name: '',
      cashtag: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
      if (id) {
        // Fetch the bank detail by ID
        const fetchCashappDetail = async () => {
          try {
            const response = await axios.get(
              `${BASE_URL}/api/cashapp-details/${id}`
            )
            if (response.data.success) {
              setCashappDetail(response.data.data)
              setLoading(false)
            } else {
              setError('Failed to fetch cashapp detail')
            }
          } catch (error: any) {
            setError(
              error.response?.data?.message || 'Failed to fetch cashapp detail'
            )
            setLoading(false)
          }
        }
        fetchCashappDetail()
      }
    }, [id])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSaving(true) // Set saving state to true during the request
      try {
        const response = await axios.put(
          `${BASE_URL}/api/cashapp-details/${id}`,
          cashappDetail
        )
        if (response.data) {
          alert('Cashapp details updated successfully!')
          router.push('/admin/view-payment-method')
        } else {
          setError('Failed to update cashapp details')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to update cashapp details'
        )
      } finally {
        setSaving(false) // Reset saving state
      }
    }

  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:ml-[400px] ml-[3rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[3rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            Edit Cashapp Details
          </h1>

          <div className="flex flex-col mt-6 bg-white shadow-md pb-10">
            <div className="flex flex-col ml-4">
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-semibold text-gray-600 mt-2">
                  Cashapp Details
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="Name"
                    className="text-[#495057] font-semibold"
                  >
                    Name
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={cashappDetail.name}
                    onChange={(e) =>
                      setCashappDetail({ ...cashappDetail, name: e.target.value })
                    }
                    placeholder="Name"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="cashtag"
                    className="text-[#495057] font-semibold"
                  >
                    Cash Tag
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    name="cashtag"
                    value={cashappDetail.cashtag}
                    onChange={(e) =>
                      setCashappDetail({
                        ...cashappDetail,
                        cashtag: e.target.value,
                      })
                    }
                    placeholder="Cashtag"
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

export default EditCashappDetails

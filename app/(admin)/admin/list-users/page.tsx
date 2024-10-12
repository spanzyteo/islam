'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/apiConfig'

const UsersList = () => {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      console.log('Fetching users...')
      try {
        const response = await axios.get(`${BASE_URL}/api/users-details`)
        console.log(response.data)
        if (response.data.success && response.data.data.length > 0) {
          setUsers(response.data.data)
          console.log(response.data.data)
        } else {
          setError('No list of Users')
        }
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch user details'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])
  return (
    <div className="bg-[#F2F2F2] min-h-screen p-4">
      <div className="md:ml-[320px] ml-[1rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[1rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">Customers</h1>
          <div className="mt-6 bg-white shadow-md p-4 overflow-x-auto">
            {/* Table structure with responsive styling */}
            <div className="table w-full border-collapse border border-gray-300">
              {/* Table Header */}
              <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Title
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  First Name
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Last Name
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Email
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Contact Number
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Address 1
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Address 2
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Town City
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Country
                </div>
              </div>
              {/* Table Rows */}
              {users.length > 0 ? (
                users.map((user) => (
                  <div key={user.id} className="table-row text-sm md:text-base">
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {user.title}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {user.firstname}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {user.lastname}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {user.email}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {user.phone}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {user.address1}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {user.address2}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {user.town}
                    </div>
                    <div className="table-cell p-2 md:p-4 border border-gray-300">
                      {user.country}
                    </div>
                  </div>
                ))
              ) : (
                <p>No users Available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersList

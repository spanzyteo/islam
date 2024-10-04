import React from 'react'

const page = () => {
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
              <div className="table-row text-sm md:text-base">
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Mr
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Joshua
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Titus
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  tech@gmail.com
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  08285372216
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  opp front of trailer jorge
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  opp front of trailer jorge mansion
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Lagos
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Nigeria
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

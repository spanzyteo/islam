import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F2F2F2] min-h-screen p-4">
      <div className="md:ml-[400px] ml-[1rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[1rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            User Payments
          </h1>
          <div className="mt-6 bg-white shadow-md p-4 overflow-x-auto">
            {/* Table structure */}
            <div className="table w-full border-collapse border border-gray-300">
              {/* Table Header */}
              <div className="table-row bg-gray-100 font-semibold text-sm md:text-base">
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  UserId
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  First Name
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Last Name
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Proof of Payment
                </div>
              </div>
              {/* Table Rows with Random Values */}
              <div className="table-row text-sm md:text-base">
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  1
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Joshua
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Titus
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  <a
                    href="https://example.com/payment1.jpg"
                    className="text-blue-500 underline"
                    download="proof_of_payment1.jpg"
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="table-row text-sm md:text-base">
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  2
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Amara
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Nwankwo
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  <a
                    href="https://example.com/payment2.jpg"
                    className="text-blue-500 underline"
                    download="proof_of_payment2.jpg"
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="table-row text-sm md:text-base">
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  3
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Chinedu
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Okafor
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  <a
                    href="https://example.com/payment3.jpg"
                    className="text-blue-500 underline"
                    download="proof_of_payment3.jpg"
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="table-row text-sm md:text-base">
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  4
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Sophia
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  Williams
                </div>
                <div className="table-cell p-2 md:p-4 border border-gray-300">
                  <a
                    href="https://example.com/payment4.jpg"
                    className="text-blue-500 underline"
                    download="proof_of_payment4.jpg"
                  >
                    Download
                  </a>
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

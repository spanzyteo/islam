import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:ml-[400px] ml-[3rem] flex flex-col">
        <div className="md:mt-[20px] mt-24 mr-[3rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">
            Payment methods
          </h1>
          <div className="flex flex-col mt-6 bg-white shadow-md pb-10">
            <div className="flex flex-col ml-4">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-gray-600 mt-2">
                  Bank Details
                </h1>
                <div className="flex flex-col mt-4 text-[#495057] font-semibold gap-2">
                  <h1>
                    Bank Name: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                  <h1>
                    Account Number:{' '}
                    <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                  <h1>
                    Swift Code: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                  <h1>
                    IBAN: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                  <h1>
                    Bank Address: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                  <h1>
                    Receivers Address:{' '}
                    <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                  <h1>
                    Receivers Phone:{' '}
                    <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                </div>
                <h1 className="text-xl font-semibold text-gray-600 mt-6">
                  Zelle Details
                </h1>
                <div className="flex flex-col mt-4 text-[#495057] font-semibold gap-2">
                  <h1>
                    Name: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                  <h1>
                    Email: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                  <h1>
                    Phone Number: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                </div>
                <h1 className="text-xl font-semibold text-gray-600 mt-6">
                  Venmo Details
                </h1>
                <div className="flex flex-col mt-4 text-[#495057] font-semibold gap-2">
                  <h1>
                    Username: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                  <h1>
                    Last Four Digits: <span className="font-thin">XXXX</span>
                  </h1>
                </div>
                <h1 className="text-xl font-semibold text-gray-600 mt-6">
                  Paypal
                </h1>
                <div className="flex flex-col mt-4 text-[#495057] font-semibold gap-2">
                  <h1>
                    Email: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                </div>
                <h1 className="text-xl font-semibold text-gray-600 mt-6">
                  Cashapp Name
                </h1>
                <div className="flex flex-col mt-4 text-[#495057] font-semibold gap-2">
                  <h1>
                    Cashtag: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
                </div>
                <h1 className="text-xl font-semibold text-gray-600 mt-6">
                  Bitcoin
                </h1>
                <div className="flex flex-col mt-4 text-[#495057] font-semibold gap-2">
                  <h1>
                    Bitcoin Address: <span className="font-thin">XXXX XXXXX</span>
                  </h1>
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

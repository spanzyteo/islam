import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:ml-[400px] ml-[3rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[3rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">Your Details</h1>
          <div className="flex flex-col mt-6 bg-white shadow-md pb-10">
            <div className="flex flex-col ml-4">
              <form>
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
                    placeholder="Receivers Phone"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
                  Add
                </button>
              </form>
              <form>
                <h1 className="text-xl font-semibold text-gray-600 mt-8">
                  Zelle Details
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="name"
                    className="text-[#495057] font-semibold"
                  >
                    Name
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
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
                    placeholder="Email"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="phone_number"
                    className="text-[#495057] font-semibold"
                  >
                    Phone number
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
                  Add
                </button>
              </form>
              <form>
                <h1 className="text-xl font-semibold text-gray-600 mt-8">
                  Venmo Details
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="username"
                    className="text-[#495057] font-semibold"
                  >
                    Username
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="last-four-digits"
                    className="text-[#495057] font-semibold"
                  >
                    Last four digits
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    pattern="\d{4}"
                    placeholder="Last four digits"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
                  Add
                </button>
              </form>
              <form>
                <h1 className="text-xl font-semibold text-gray-600 mt-8">
                  Paypal
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
                    placeholder="Email"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
                  Add
                </button>
              </form>
              <form>
                <h1 className="text-xl font-semibold text-gray-600 mt-8">
                  Cash app name
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="cashtag"
                    className="text-[#495057] font-semibold"
                  >
                    Cashtag
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Cashtag"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
                  Add
                </button>
              </form>
              <form>
                <h1 className="text-xl font-semibold text-gray-600 mt-8">
                  Bitcoin
                </h1>
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="bitcoin-address"
                    className="text-[#495057] font-semibold"
                  >
                    Bitcoin address
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Bitcoin address"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
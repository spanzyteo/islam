'use client'
import { useState } from 'react'
import { BASE_URL } from '../utils/apiConfig'
import axios from 'axios'

const AddPayment = () => {
  const [formData, setFormData] = useState({
    bankname: '',
    accountnumber: '',
    swiftcode: '',
    iban: '',
    bankaddress: '',
    receiveraddress: '',
    receiverphone: '',
  })
  const [zelleDetails, setZelleDetails] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [venmoDetails, setVenmoDetails] = useState({
    username: '',
    lastfourdigits: '',
  })
  const [paypalDetails, setPaypalDetails] = useState({
    email: ''
  })
  const [cashappDetails, setCashappDetails] = useState({
    name: '',
    cashtag: ''
  })
  const [bitcoinDetails, setBitcoinDetails] = useState({
    bitcoinaddress: ''
  })
  const [loading, setLoading] = useState(false)
  const [zelleLoading, setZelleLoading] = useState(false)
  const [venmoLoading, setVenmoLoading] = useState(false)
  const [paypalLoading, setPaypalLoading] = useState(false)
  const [cashappLoading, setCashappLoading] = useState(false)
  const [bitcoinLoading, setBitcoinLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleZelleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZelleDetails({
      ...zelleDetails,
      [e.target.name]: e.target.value,
    })
  }

  const handleVenmoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVenmoDetails({
      ...venmoDetails,
      [e.target.name]: e.target.value,
    })
  } 
  
  const handlePaypalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaypalDetails({
      ...paypalDetails,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleCashtagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCashappDetails({
      ...cashappDetails,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleBitcoinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBitcoinDetails({
      ...bitcoinDetails,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post(
        `${BASE_URL}/api/storeBankDetails`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        setFormData({
          bankname: '',
          accountnumber: '',
          swiftcode: '',
          iban: '',
          bankaddress: '',
          receiveraddress: '',
          receiverphone: '',
        })
        console.log('form added')
      } else {
        console.error('Error posting data')
        console.log('Error occurred')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleZelleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setZelleLoading(true)

    try {
      const response = await axios.post(
        `${BASE_URL}/api/storeZelleDetails`,
        zelleDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        setZelleDetails({
          name: '',
          email: '',
          phone: '',
        })
      } else {
        console.error('Error posting zelle data')
      }
    } catch (error: any) {
      console.error('Error:', error.response?.data || error.message)
    } finally {
      setZelleLoading(false)
    }
  }

  const handleVenmoSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setVenmoLoading(true)

    try {
      const response = await axios.post(
        `${BASE_URL}/api/storeVenmoDetails`,
        venmoDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        setVenmoDetails({
          username: '',
          lastfourdigits: '',
        })
      } else {
        console.error('Error posting venmo data')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setVenmoLoading(false)
    }
  }
  
  const handlePaypalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPaypalLoading(true)

    try {
      const response = await axios.post(
        `${BASE_URL}/api/storePaypalDetails`,
        paypalDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        setPaypalDetails({
          email: '',
        })
      } else {
        console.error('Error posting paypal data')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setPaypalLoading(false)
    }
  }
  
  const handleCashappSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCashappLoading(true)

    try {
      const response = await axios.post(
        `${BASE_URL}/api/storeCashappDetails`,
        cashappDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        setCashappDetails({
          name: '',
          cashtag: '',
        })
      } else {
        console.error('Error posting cashapp data')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setCashappLoading(false)
    }
  }
  
  const handleBitcoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBitcoinLoading(true)

    try {
      const response = await axios.post(
        `${BASE_URL}/api/storeBiitcoinDetails`,
        bitcoinDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.status === 200) {
        setBitcoinDetails({
          bitcoinaddress: ''
        })
        console.log('bitcoin form added')
        console.log(bitcoinDetails)
      } else {
        console.error('Error posting bitcoin data')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setBitcoinLoading(false)
    }
  }
  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:ml-[400px] ml-[3rem] flex flex-col">
        <div className="md:mt-[20px] mt-8 mr-[3rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">Your Details</h1>
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
                    value={formData.bankname}
                    onChange={handleInputChange}
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
                    value={formData.accountnumber}
                    onChange={handleInputChange}
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
                    value={formData.swiftcode}
                    onChange={handleInputChange}
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
                    value={formData.iban}
                    onChange={handleInputChange}
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
                    value={formData.bankaddress}
                    onChange={handleInputChange}
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
                    value={formData.receiveraddress}
                    onChange={handleInputChange}
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
                    value={formData.receiverphone}
                    onChange={handleInputChange}
                    placeholder="Receivers Phone"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Add'}
                </button>
              </form>
              <form onSubmit={handleZelleSubmit}>
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
                    name="name"
                    value={zelleDetails.name}
                    onChange={handleZelleInputChange}
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
                    name="email"
                    value={zelleDetails.email}
                    onChange={handleZelleInputChange}
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
                    name="phone"
                    value={zelleDetails.phone}
                    onChange={handleZelleInputChange}
                    placeholder="Phone Number"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300"
                >
                  Add
                </button>
              </form>
              <form onSubmit={handleVenmoSubmit}>
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
                    name='username'
                    value={venmoDetails.username}
                    onChange={handleVenmoInputChange}
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
                    name='lastfourdigits'
                    value={venmoDetails.lastfourdigits}
                    onChange={handleVenmoInputChange}
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    pattern="\d{4}"
                    placeholder="Last four digits"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button type='submit' className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
                  Add
                </button>
              </form>
              <form onSubmit={handlePaypalSubmit}>
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
                    name='email'
                    value={paypalDetails.email}
                    onChange={handlePaypalInputChange}
                    placeholder="Email"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button type='submit' className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
                  Add
                </button>
              </form>
              <form onSubmit={handleCashappSubmit}>
                <h1 className="text-xl font-semibold text-gray-600 mt-8">
                  Cash app name
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
                    name='name'
                    value={cashappDetails.name}
                    onChange={handleCashtagInputChange}
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
                    Cashtag
                    <span className="text-[#01aef0] font-semibold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Cashtag"
                    name='cashtag'
                    value={cashappDetails.cashtag}
                    onChange={handleCashtagInputChange}
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button type='submit' className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
                  Add
                </button>
              </form>
              <form onSubmit={handleBitcoinSubmit}>
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
                    name='bitcoinaddress'
                    value={bitcoinDetails.bitcoinaddress}
                    onChange={handleBitcoinInputChange}
                    placeholder="Bitcoin address"
                    className="md:h-[37px] md:w-[350px] w-[90%] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] border-2 border-gray-500 transition duration-300"
                    required
                  />
                </div>
                <button type='submit' className="bg-[#01aef0] p-2 mt-4 text-white px-6 uppercase font-semibold rounded-sm hover:opacity-80 transition-all ease-in-out duration-300">
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

export default AddPayment

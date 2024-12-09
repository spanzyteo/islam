'use client'
import React, { useState } from 'react'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa'
import Select, { SingleValue } from 'react-select'
import countryList from 'react-select-country-list'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { BASE_URL } from '@/app/(admin)/admin/utils/apiConfig'

type CountryOption = {
  value: string
  label: string
}
const DetailsForm = () => {
  const router = useRouter()
  const [value, setValue] = useState<SingleValue<CountryOption>>(null)
  const [isChecked, setIsChecked] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address1: '',
    address2: 'address2',
    town: '',
    country: '',
  })
  const [loading, setLoading] = useState(false)

  const options = countryList().getData()

  const changeHandler = (val: SingleValue<CountryOption>) => {
    setValue(val)
    if (val) {
      setFormData({
        ...formData,
        country: val.value,
      })
    }
  }
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePhoneChange = (value: string) => {
    setFormData({
      ...formData,
      phone: value, // Update phone with the full value, including the country code
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post(`${BASE_URL}/api/register`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.status === 200) {
        setFormData({
          title: '',
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          address1: '',
          address2: '',
          town: '',
          country: '',
        })
        router.push('/donate/one-off/details/payment')
      } else {
        console.error('Error posting data')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="bg-gray-200 w-[95%] sm:w-[95%] lg:w-[60%] flex flex-col md:px-10 px-5 rounded-md pb-10 ">
        <h1 className="text-[#01aef0] uppercase text-4xl font-bold mt-16 text-center">
          Your Details
        </h1>
        <form className="mt-8 " onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col justify-between sm:w-[80%] w-[95%] md:w-auto gap-4 md:gap-0">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-[#495057] font-semibold">
                Title <span className="text-[#01aef0] font-semibold">*</span>
              </label>
              <select
                name="title"
                id="title"
                className="md:w-[93px] md:h-[37px] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] transition duration-300"
                value={formData.title}
                onChange={handleInputChange}
                required
              >
                <option value="">Title</option>
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
                <option value="mrs">Mrs.</option>
                <option value="dr">Dr</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first_name"
                className="text-[#495057] font-semibold"
              >
                First Name
                <span className="text-[#01aef0] font-semibold">*</span>
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="md:h-[37px] md:w-[263px] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0]  transition duration-300"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="last_name"
                className="text-[#495057] font-semibold"
              >
                Last Name
                <span className="text-[#01aef0] font-semibold">*</span>
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="md:h-[37px] md:w-[263px] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0]  transition duration-300"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between sm:w-[80%] w-[95%] md:w-auto gap-4 md:gap-0 mt-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#495057] font-semibold">
                Email
                <span className="text-[#01aef0] font-semibold">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="md:h-[37px] md:w-[263px] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0]  transition duration-300"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-number"
                className="text-[#495057] font-semibold"
              >
                Contact Number
              </label>
              <PhoneInput
                placeholder="Number"
                inputClass="md:h-[37px] md:w-[342px] px-2 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] transition duration-300"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>
          <div className="flex flex-col sm:w-[80%] w-[95%] md:w-auto gap-4 md:gap-0 mt-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-[#495057] font-semibold">
                Address
                <span className="text-[#01aef0] font-semibold">*</span>
              </label>
              <input
                type="text"
                name="address1"
                placeholder="123 High Street"
                className="md:h-[37px] md:w-[100%] px-2 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] transition duration-300"
                value={formData.address1}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label
                htmlFor="address"
                className="text-[#495057] font-semibold hidden"
              >
                Address 2
              </label>
              <input
                type="text"
                name="address2"
                placeholder="123 High Street"
                className="md:h-[37px] w-[100%] px-2 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] transition duration-300 hidden"
                value={formData.address2}
                onChange={handleInputChange}
                hidden
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between sm:w-[80%] w-[95%] md:w-auto gap-4 md:gap-0 mt-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="town-city"
                className="text-[#495057] font-semibold"
              >
                Town City
                <span className="text-[#01aef0] font-semibold">*</span>
              </label>
              <input
                type="text"
                name="town"
                placeholder="Enter City"
                className="md:h-[37px] md:w-[263px] px-1 py-2 text-[#495057] focus:outline-none focus:border-2 focus:border-[#01aef0] transition duration-300"
                value={formData.town}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="country" className="text-[#495057] font-semibold">
                Country
              </label>
              <Select
                name="country"
                options={options}
                value={value}
                onChange={changeHandler}
                placeholder="Select a country"
                className="w-full md:w-[342px] text-[#495057]"
              />
            </div>
          </div>
          <h1 className="text-[#01aef0] uppercase text-4xl font-bold mt-16 text-center">
            Keep In Touch
          </h1>
          <div className="flex items-center justify-center gap-2 mx-auto mt-4">
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="h-[25px] w-[25px]"
            />
            <label
              htmlFor="checkbox"
              className="font-semibold md:text-xl text-[#495057]"
            >
              Yes, I would like to hear from IRW
            </label>
          </div>
          <h1 className="text-center mt-4 font-light text-[#495057]">
            We would like to keep in touch with you to share the latest info on
            our work as well as how your donations have helped, via email. We
            will always treat your personal information with the utmost care and
            will keep it private.
          </h1>
          <div className="flex items-center justify-between mt-8">
            <Link href={'/donate/monthly'}>
              <button
                type="button"
                className="text-2xl font-bold bg-white flex items-center p-2 px-4 gap-2 text-[#A7A7A7] hover:bg-gray-300 hover:text-[#555555] transition-all duration-300 ease-in-out"
              >
                <FaRegArrowAltCircleLeft className="h-[30px] w-[30px]" />{' '}
                <h1>BACK</h1>
              </button>
            </Link>
            <button
              type="submit"
              className="text-2xl font-bold bg-[#01aef0] flex items-center p-2 px-4 gap-2 text-white hover:bg-blue-500 transition-all duration-300 ease-in-out"
            >
              <h1>NEXT</h1>
              <FaRegArrowAltCircleRight className="h-[30px] w-[30px]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DetailsForm

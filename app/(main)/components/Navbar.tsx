'use client'
import { useState, useEffect } from 'react'
import logo from '../../public/logo.png'
import logo2 from '../../public/logo2.png'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'
import { IoMdMenu } from 'react-icons/io'
import Link from 'next/link'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const screenWidth = window.innerWidth

      // Apply scroll effect only if the screen is not a small screen (e.g., above 768px)
      if (screenWidth >= 768) {
        setScrolled(scrollTop > 0)
      } else {
        setScrolled(false) // Ensure the initial navbar stays on small screens
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {scrolled ? (
        <nav className="fixed lg:flex hidden justify-between top-0 left-0 h-[70px] w-full bg-white shadow-md transition-all duration-300 z-50">
          <div className="h-[70px] w-[150px] ml-8">
            <Image
              src={"/logo2.png"}
              alt="logo"
              objectFit="cover"
              width={270}
              height={150}
              className="h-full w-full"
            />
          </div>
          <div className="flex items-center font-semibold text-black gap-4">
            <div className="cursor-pointer">Home</div>
            <div className="flex items-center gap-2 cursor-pointer">
              <h1 className="font-semibold">About us</h1>
              <IoIosArrowDown className="h-[15px] w-[15px] text-black font-bold" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <h1 className="">Take action</h1>
              <IoIosArrowDown className="h-[15px] w-[15px] text-black font-bold" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <h1 className="">Give</h1>
              <IoIosArrowDown className="h-[15px] w-[15px] text-black" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <h1 className="">Work with us</h1>
              <IoIosArrowDown className="h-[15px] w-[15px] text-black" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <h1 className="">Media, news and opinion</h1>
              <IoIosArrowDown className="h-[15px] w-[15px] text-black font-bold" />
            </div>
            <Link href={'/donate'}>
              <div className="bg-[#DC3545] text-white p-2 px-3 mr-3 cursor-pointer font-semibold hover:opacity-70">
                DONATE
              </div>
            </Link>
          </div>
        </nav>
      ) : (
        <nav className="fixed top-0 left-0 w-full h-[150px] transition-all duration-300 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-20 blur-lg pointer-events-none"></div>
          <div className="flex flex-row justify-between">
            <div className="z-50">
              <div className="md:h-[150px] h-[100px] md:w-[270px] w-[200px] ml-4 md:ml-8">
                <Image
                  src={"/public/logo.png"}
                  alt="logo"
                  objectFit="cover"
                  width={270}
                  height={150}
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="flex flex-col z-50">
              <div className="flex items-center">
                <div className="md:flex hidden gap-1 items-center">
                  <h1 className="text-[14px] text-white">Global Family</h1>
                  <IoIosArrowDown className="h-[15px] w-[15px] text-white font-semibold" />
                </div>
                <div className="ml-2 bg-white text-[#23438f] p-2 px-6 font-semibold lg:block hidden">
                  العربية
                </div>
                <div className="bg-[#FFAE00] text-[#23438f] p-2 px-5 font-semibold lg:block hidden">
                  Annual Report Site
                </div>
                <Link href={'/donate'}>
                <div className="bg-[#DC3545] text-white p-2 px-5 font-semibold md:text-[1rem] text-[0.8rem]">
                  DONATE
                </div>
                </Link>
                <div className="bg-[#0074C8] text-white p-2 px-5 font-semibold lg:block hidden">
                  40 Years of Service
                </div>
                <div className="bg-[#0074C8] text-white p-3 mt-[-0.5rem] font-semibold ml-[0.05rem] md:mr-2 mr-0">
                  <IoSearchSharp className="h-[20px] w-[20px]" />
                </div>
              </div>
              <div className="lg:flex hidden items-center font-semibold mt-16 text-white gap-4">
                <div className="cursor-pointer hover:text-[#FFAE00] transition-all duration-700 ease-in-out">
                  Home
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-[#FFAE00] transition-all duration-700 ease-in-out group">
                  <h1 className="group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out">
                    About us
                  </h1>
                  <IoIosArrowDown className="h-[15px] w-[15px] text-white font-bold group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out" />
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-[#FFAE00] transition-all duration-700 ease-in-out group">
                  <h1 className="group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out">
                    Take action
                  </h1>
                  <IoIosArrowDown className="h-[15px] w-[15px] text-white font-bold group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out" />
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-[#FFAE00] transition-all duration-700 ease-in-out group">
                  <h1 className="group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out">
                    Give
                  </h1>
                  <IoIosArrowDown className="h-[15px] w-[15px] text-white font-bold group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out" />
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-[#FFAE00] transition-all duration-700 ease-in-out group">
                  <h1 className="group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out">
                    Work with us
                  </h1>
                  <IoIosArrowDown className="h-[15px] w-[15px] text-white font-bold group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out" />
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-[#FFAE00] transition-all duration-700 ease-in-out group">
                  <h1 className="group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out">
                    Media, news and opinion
                  </h1>
                  <IoIosArrowDown className="h-[15px] w-[15px] text-white font-bold group-hover:text-[#FFAE00] transition-all duration-700 ease-in-out" />
                </div>
              </div>
              <div className="block lg:hidden mt-8 relative">
                <IoMdMenu className="text-black h-[30px] w-[30px] absolute right-0 mr-0" />
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}

export default Navbar

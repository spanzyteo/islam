'use client'

import { useEffect, useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { GiCancel } from 'react-icons/gi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const MobileSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const [activeLink, setActiveLink] = useState('')

  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  useEffect(() => {
    if (pathname) {
      switch (pathname) {
        case '/admin':
          setActiveLink('Dashboard')
          break
        case '/admin/list-users':
          setActiveLink('list_users')
          break
        case '/admin/add-payment-method':
          setActiveLink('payment_method')
          break
        case '/admin/view-payment-method':
          setActiveLink('view_payment_method')
          break
        case '/admin/view-payment-proof':
          setActiveLink('view_payment_proof')
          break
        default:
          setActiveLink('Dashboard')
      }
    }
  }, [pathname])

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName)
    setSidebarOpen(false)
  }

  return (
    <div className="bg-[#F2F2F2] xl:hidden ">
      {!sidebarOpen && (
        <div onClick={openSidebar} className="w-[60px] h-[60px] pt-4">
          <LuMenu className="h-full w-full" />
        </div>
      )}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.5 }}
            className="bg-white w-[300px] flex flex-col fixed top-2 bottom-0 left-3 rounded-xl border-2"
          >
            <div onClick={closeSidebar} className="w-[50px] h-[50px] pt-4">
              <GiCancel className="h-full w-full" />
            </div>
            <div className="flex flex-col items-start ml-6 gap-8 mt-8">
              <Link href={'/admin'} passHref>
                <h1
                  onClick={() => handleLinkClick('Dashboard')}
                  className={`text-xl font-semibold cursor-pointer ${
                    activeLink === 'Dashboard'
                      ? 'text-[#01aef0]'
                      : 'text-gray-500'
                  }`}
                >
                  Dashboard
                </h1>
              </Link>
              <Link href={'/admin/list-users'} passHref>
                <h1
                  onClick={() => handleLinkClick('list_users')}
                  className={`text-xl font-semibold cursor-pointer ${
                    activeLink === 'list_users'
                      ? 'text-[#01aef0]'
                      : 'text-gray-500'
                  }`}
                >
                  List Users
                </h1>
              </Link>
              <Link href={'/admin/add-payment-method'} passHref>
                <h1
                  onClick={() => handleLinkClick('payment_method')}
                  className={`text-xl font-semibold cursor-pointer ${
                    activeLink === 'payment_method'
                      ? 'text-[#01aef0]'
                      : 'text-gray-500'
                  }`}
                >
                  Add payment method
                </h1>
              </Link>
              <Link href={'/admin/view-payment-method'} passHref>
                <h1
                  onClick={() => handleLinkClick('view_payment_method')}
                  className={`text-xl font-semibold cursor-pointer ${
                    activeLink === 'view_payment_method'
                      ? 'text-[#01aef0]'
                      : 'text-gray-500'
                  }`}
                >
                  View payment method
                </h1>
              </Link>
              <Link href={'/admin/view-payment-proof'} passHref> 
                <h1
                  onClick={() => handleLinkClick('view_payment_proof')}
                  className={`text-xl font-semibold cursor-pointer ${
                    activeLink === 'view_payment_proof'
                      ? 'text-[#01aef0]'
                      : 'text-gray-500'
                  }`}
                >
                  View payment proof
                </h1>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileSidebar

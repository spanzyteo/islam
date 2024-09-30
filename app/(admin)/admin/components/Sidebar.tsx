'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname() 
  const [activeLink, setActiveLink] = useState('')

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
  }

  return (
    <div className="bg-white w-[300px] xl:flex flex-col hidden fixed top-2 bottom-0 left-3 rounded-xl border-2">
      <div className="fixed h-[120px] w-[300px] flex items-center justify-center">
        <Image
          src={'/logo2.png'}
          alt="logo"
          height={100}
          width={200}
          objectFit="cover"
          className="h-[100px] w-[200px] mt-8"
        />
      </div>
      <div className="flex flex-col items-start ml-10 mt-[200px] gap-8">
        <Link href={'/admin'} passHref>
          <h1
            onClick={() => handleLinkClick('Dashboard')}
            className={`text-xl font-semibold cursor-pointer ${
              activeLink === 'Dashboard' ? 'text-[#01aef0]' : 'text-gray-500'
            }`}
          >
            Dashboard
          </h1>
        </Link>
        <Link href={'/admin/list-users'} passHref>
          <h1
            onClick={() => handleLinkClick('list_users')}
            className={`text-xl font-semibold cursor-pointer ${
              activeLink === 'list_users' ? 'text-[#01aef0]' : 'text-gray-500'
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
      </div>
    </div>
  )
}

export default Sidebar

'use client'
import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar"
import MobileSidebar from "./MobileSidebar"

const LayoutWithSidebar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  return (
    <>
      {!isLoginPage && (
        <>
          <MobileSidebar />
          <Sidebar />
        </>
      )}
      {children}
    </>
  )
}

export default LayoutWithSidebar
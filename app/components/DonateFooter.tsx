import React from 'react'
import Link from 'next/link'

const DonateFooter = () => {
  return (
    <Link href={'/donate'}>
    <div className="fixed flex items-center justify-center md:hidden bottom-0 h-[60px] right-0 left-0 bg-[#DC3545] text-center text-white uppercase font-semibold">
      <h1>Donate</h1>
    </div>
    </Link>
  )
}

export default DonateFooter

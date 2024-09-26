import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-[#e6e6e6]">
      <div className="flex flex-col lg:flex-row mx-auto ml-4 lg:ml-0 pb-16 md:pb-4">
        <div className="mx-auto flex flex-col lg:flex-row lg:gap-16 mt-6">
          <div className="w-[200px] h-[61px]">
            <Image
              src={'/footer-img.png'}
              alt="img"
              height={61}
              width={200}
              className="h-full w-full"
            />
          </div>
          <div className="lg:w-[831px] md:w-[70%] sm:w-[80%] w-[90%] lg:mt-0">
            <h1 className="w-full text-[#ababab] text-[11px]">
              © Islamic Relief (Worldwide) TM 2019.
              <span className="text-[#898686]">
                Privacy Statement , Terms & Conditions
              </span>
              Registered Charity No: 328158. Company Reg No: 02365572. OSCR Reg
              No: SC042020. Head Office: 19 Rea Street South, Digbeth,
              Birmingham, B5 6LB, United Kingdom. Disclaimer: Islamic Relief is
              not affiliated with any external websites. Islamic Relief is not
              responsible for the content of external internet sites and any
              links from external web sites to this site do not constitute an
              endorsement of that site by Islamic Relief. Important: About email
              scams Staff Resources:
              <span className="text-[#898686]">
                Extranet, Email, Remote Office.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
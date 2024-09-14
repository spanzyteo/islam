import React from 'react'
import Image from 'next/image'

const SecondaryFooter = () => {
  return (
      <div className="mt-0 flex lg:flex-row flex-col bg-[#305176]">
        <div className="flex lg:flex-row flex-col lg:mx-auto gap-16">
          <div className="mt-8 flex flex-col ml-4 lg:ml-0 pb-4">
            <div className="max-w-[210px] h-[120px] w-[210px]">
              <Image
                src={'/logo.png'}
                alt="img"
                height={120}
                width={210}
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col mt-8 gap-1">
              <h1 className="text-white text-[12px]">
                Contact tel: +44 (0)121 605 5555
              </h1>
              <h1 className="text-white text-[12px]">General enquiries</h1>
              <h1 className="text-white text-[12px]">
                Complaints and concerns
              </h1>
              <h1 className="text-white text-[12px]">Media enquiries</h1>
              <h1 className="text-white text-[12px]">Media enquiries</h1>
              <h1 className="text-white text-[12px]">Privacy statement</h1>
            </div>
            <div className="flex flex-col mt-8 gap-1">
              <h1 className="text-white text-[12px]">
                Islamic Relief Worldwide
              </h1>
              <h1 className="text-white text-[12px]">
                19 Rea St South Digbeth
              </h1>
              <h1 className="text-white text-[12px]">Birmingham, B5 6LB</h1>
              <h1 className="text-white text-[12px]">United Kingdom</h1>
            </div>
          </div>
          <div className="lg:mt-20 flex flex-row ml-4 lg:ml-0 lg:gap-32 gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#F29F05] font-semibold">About Us</h1>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-[12px]">Board of Trustees</h1>
                <h1 className="text-white text-[12px]">Board of Directors</h1>
                <h1 className="text-white text-[12px]">Our history</h1>
                <h1 className="text-white text-[12px]">Our strategy</h1>
                <h1 className="text-white text-[12px]">
                  Modern Slavery Statement
                </h1>
                <h1 className="text-white text-[12px]">
                  Policy and publications
                </h1>
                <h1 className="text-white text-[12px]">Evaluations</h1>
                <h1 className="text-white text-[12px]">
                  'Do no harm' commitment
                </h1>
                <h1 className="text-white text-[12px]">Gender pay gap</h1>
                <h1 className="text-white text-[12px]">Terms and conditions</h1>
                <h1 className="text-white text-[12px]">Why support us?</h1>
                <h1 className="text-white text-[12px]">Scams and fraud</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[#F29F05] font-semibold">What we do</h1>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-[12px]">
                  Protecting life and dignity
                </h1>
                <h1 className="text-white text-[12px]">
                  Empowering communities
                </h1>
                <h1 className="text-white text-[12px]">
                  Campaigning for change
                </h1>
                <h1 className="text-white text-[12px]">
                  Strengthening the islamic Relief Partnership
                </h1>
                <h1 className="text-white text-[12px]">Seasonal projects</h1>
                <h1 className="text-white text-[12px]">Our promises</h1>
              </div>
              <h1 className="text-[#F29F05] font-semibold mt-8">
                Work with us
              </h1>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-[12px]">
                  Current opportunities
                </h1>
                <h1 className="text-white text-[12px]">
                  What we offer UK colleagues
                </h1>
                <h1 className="text-white text-[12px]">Tenders</h1>
              </div>
            </div>
          </div>
          <div className="bg-[#F29F05] lg:w-[346px] w-[100%] lg:mt-[-1.5rem]">
            <div className="mt-16 flex flex-col ml-4 lg:ml-8">
              <h1 className="text-3xl text-[#305176] font-semibold">
                EMERGENCY
              </h1>
              <h1 className="text-3xl text-[#305176] font-semibold mt-2">
                APPEALS
              </h1>
              <div className="mt-8 flex flex-col text-[#305176] font-semibold gap-2">
                <h1 className="">Winter Appeal</h1>
                <h1 className="">Palestine emergency appeal</h1>
                <h1 className="">Sudan Emergency Appeal</h1>
                <h1 className="">Horn of Africa Appeal</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SecondaryFooter

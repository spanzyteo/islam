'use client'
import React from 'react'

const SecondBody = () => {
  return (
    <div className="mt-20">
      <div className="mx-auto flex">
        <h1 className="mx-auto font-semibold text-[#305176] text-xl">
          All Islamic Relief news
        </h1>
      </div>
      <div className="mt-20 flex bg-[#305473] pb-20">
        <div className="bg-[#375B7D] flex flex-col w-[33%] border-r border-r-[#F29F05]">
          <div className="ml-1 lg:ml-20 flex flex-col mt-24 ">
            <div className="text-2xl lg:text-4xl text-white font-bold">
              <h1>Our impact in</h1>
              <h1>2023</h1>
            </div>
            <div className="w-[50px] border border-[#F29F05] mt-10"></div>
            <div className="text-white font-bold md:text-2xl text-md mt-8 cursor-pointer">
              <h1>Saving Lives</h1>
            </div>
            <div className="w-[50px] border border-[#F29F05] mt-10"></div>
            <div className="text-white font-bold md:text-2xl text-md mt-8 cursor-pointer">
              <h1>Empowering communities</h1>
            </div>
            <div className="w-[50px] border border-[#F29F05] mt-10"></div>
            <div className="text-white font-bold md:text-2xl text-md mt-8 cursor-pointer">
              <h1>Advocating for change</h1>
            </div>
          </div>
        </div>
        <div className="w-[64%] flex lg:flex-row flex-col lg:ml-10 ml-2 mt-20">
          <div className=" flex flex-col">
            <div>
              <h1
                className="text-6xl text-transparent"
                style={{ WebkitTextStroke: '2px #F29F05' }}
              >
                326
              </h1>
              <h1 className="text-[#F29F05] text-2xl font-semibold mt-2">
                emergency projects
              </h1>
              <h1 className="text-white md:text-xl text-lg mt-4 lg:w-[100%] w-[250px]">
                reached 8.7 million people in 29 countries
              </h1>
            </div>
            <div className="mt-20">
              <h1
                className="text-6xl text-transparent"
                style={{ WebkitTextStroke: '2px #F29F05' }}
              >
                6
              </h1>
              <h1 className="text-[#F29F05] text-2xl font-semibold mt-2">
                major appeals
              </h1>
              <h1 className="text-white md:text-xl text-lg mt-4 lg:w-[450px] w-[250px]">
                launched, and 3 maintained, to fund emergency responses
              </h1>
            </div>
          </div>
          <div className=" flex flex-col lg:mt-0 mt-20">
            <div>
              <h1
                className="text-6xl text-transparent"
                style={{ WebkitTextStroke: '2px #F29F05' }}
              >
                10.2
              </h1>
              <h1 className="text-[#F29F05] text-2xl font-semibold mt-2">
                million individuals
              </h1>
              <h1 className="text-white md:text-xl text-lg mt-4 lg:w-[100%] w-[250px]">
                received life-saving food aid, including over 2 million monthly
                in Yemen
              </h1>
            </div>
            <div className="mt-20">
              <h1
                className="text-6xl text-transparent"
                style={{ WebkitTextStroke: '2px #F29F05' }}
              >
                132.6
              </h1>
              <h1 className="text-[#F29F05] text-2xl font-semibold mt-2">
                132.6 million
              </h1>
              <h1 className="text-white md:text-xl text-lg mt-4 lg:w-[450px] w-[250px]">
                spent supporting people affected by and recovering from
                disasters
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondBody

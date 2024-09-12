'use client'
import React, { useState } from 'react'
import { newsText, NewsTextStructure } from '../data/newsText'

const SecondBody = () => {
  const [activeSection, setActiveSection] = useState<string>('Saving lives')
  const [currentSet, setCurrentSet] = useState<NewsTextStructure[]>(
    newsText.filter((item) => item.section === 'Saving lives')
  )

  const handleButtonClick = (section: string) => {
    setActiveSection(section)
    setCurrentSet(newsText.filter((item) => item.section === section))
  }

  const buttonClass = (section: string) => {
    return ` ${
      activeSection === section
        ? 'text-[#F29F05] font-bold md:text-2xl text-md mt-8 cursor-pointer'
        : 'text-white font-bold md:text-2xl text-md mt-8 cursor-pointer'
    }`
  }

  return (
    <div className="mt-20">
      <div className="mx-auto flex">
        <h1 className="mx-auto font-semibold text-[#305176] text-xl">
          All Islamic Relief news
        </h1>
      </div>
      <div className="mt-20 flex bg-[#305473] pb-20 overflow-hidden">
        <div className="bg-[#375B7D] flex flex-col w-[33%] border-r border-r-[#F29F05]">
          <div className="ml-1 lg:ml-20 flex flex-col mt-24 ">
            <div className="text-2xl lg:text-4xl text-white font-bold">
              <h1>Our impact in</h1>
              <h1>2023</h1>
            </div>
            <div className="w-[50px] border border-[#F29F05] mt-10"></div>
            <div className={buttonClass('Saving lives')}>
              <button onClick={() => handleButtonClick('Saving lives')}>
                Saving Lives
              </button>
            </div>
            <div className="w-[50px] border border-[#F29F05] mt-10"></div>
            <div className={buttonClass('Empowering communities')}>
              <button
                onClick={() => handleButtonClick('Empowering communities')}
              >
                Empowering communities
              </button>
            </div>
            <div className="w-[50px] border border-[#F29F05] mt-10"></div>
            <div className={buttonClass('Advocating for change')}>
              <button
                onClick={() => handleButtonClick('Advocating for change')}
              >
                Advocating for change
              </button>
            </div>
          </div>
        </div>
        {currentSet.map((item) => (
          <div
            key={item.id}
            className="w-[64%] flex lg:flex-row flex-col lg:ml-10 ml-2 mt-20"
          >
            <div className=" flex flex-col">
              <div>
                <h1
                  className="text-6xl text-transparent"
                  style={{ WebkitTextStroke: '2px #F29F05' }}
                >
                  {item.text1a}
                </h1>
                <h1 className="text-[#F29F05] text-2xl font-semibold mt-2">
                  {item.text1b}
                </h1>
                <h1 className="text-white md:text-xl text-md mt-4 lg:w-[100%] w-[220px]">
                  {item.text1c}
                </h1>
              </div>
              <div className="mt-20">
                <h1
                  className="text-6xl text-transparent"
                  style={{ WebkitTextStroke: '2px #F29F05' }}
                >
                  {item.text2a}
                </h1>
                <h1 className="text-[#F29F05] text-2xl font-semibold mt-2">
                  {item.text2b}
                </h1>
                <h1 className="text-white md:text-xl text-md mt-4 lg:w-[450px] w-[220px]">
                  {item.text2c}
                </h1>
              </div>
            </div>
            <div className=" flex flex-col lg:mt-0 mt-20">
              <div>
                <h1
                  className="text-6xl text-transparent"
                  style={{ WebkitTextStroke: '2px #F29F05' }}
                >
                  {item.text3a}
                </h1>
                <h1 className="text-[#F29F05] text-2xl font-semibold mt-2">
                  {item.text3b}
                </h1>
                <h1 className="text-white md:text-xl text-md mt-4 lg:w-[100%] w-[220px]">
                  {item.text3c}
                </h1>
              </div>
              <div className="mt-20">
                <h1
                  className="text-6xl text-transparent"
                  style={{ WebkitTextStroke: '2px #F29F05' }}
                >
                  {item.text4a}
                </h1>
                <h1 className="text-[#F29F05] text-2xl font-semibold mt-2">
                  {item.text4b}
                </h1>
                <h1 className="text-white md:text-xl text-md mt-4 lg:w-[450px] w-[220px]">
                  {item.text4c}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecondBody

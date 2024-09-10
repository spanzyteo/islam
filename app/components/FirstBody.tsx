import React from 'react'
import Image from 'next/image'

const FirstBody = () => {
  return (
    <>
      <div className="mt-16 md:w-[80%] w-[90%] mx-auto mb-40">
        <div className="flex items-center gap-4">
          <div className="md:h-[100px] h-[50px] w-[20px] bg-[rgb(48,81,118)]"></div>
          <div className="text-[#305176] lg:text-4xl text-3xl font-bold">
            Islamic Relief news
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center mt-10 gap-0">
          <div className="h-[280px] sm:[280px] lg:h-[500px] w-[100%] lg:w-[831px]">
            <Image
              src={'/ft-img.jpeg'}
              alt="img"
              objectFit="cover"
              width={831}
              height={500}
              className="w-full h-full"
            />
          </div>
          <div className="w-[100%] lg:w-[401px] lg:h-[308px] h-[280px] bg-[#305176] mt-[-1rem] lg:gap-0 lg:ml-[-5rem] flex flex-col pl-10 items-start">
            <div className="text-[#FFAE00] mt-10">News</div>
            <div className="text-white w-[300px] font-bold mt-5 text-xl">
              Libya floods 1 year on: Working with partners to tackle a calamity
              of epic proportions
            </div>
            <button className="mt-5 bg-[#FFAE00] p-3 text-[#305176] font-bold text-lg hover:opacity-90 hover:underline">
              Read more
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center mt-10 gap-16">
          <div className="flex flex-col items-center  w-[100%] lg:w-[546px]">
            <div className="w-full h-[310px]">
              <Image
                src={'/ft-img2.jpg'}
                alt="img"
                height={310}
                width={546}
                objectFit="cover"
                className="h-full w-full"
              />
            </div>
            <div className="h-[149px] w-[90%] lg:w-[514px] bg-white mt-[-5rem] shadow-md flex flex-col items-start pl-5">
              <div className="text-[#FFAE00] lg:mt-4 mt-2">News</div>
              <div className="text-[#305176] lg:w-[450px] w-[90%] font-bold lg:mt-2 mt-0 text-xl">
                Morocco&apos;s Al-Haouz Earthquake: 1 year on
              </div>
              <button className="mt-2 text-gray-500 font-bold text-lg hover:opacity-90 hover:underline">
                Read more
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center  w-[100%] lg:w-[546px]">
            <div className="w-full h-[310px]">
              <Image
                src={'/ft-img3.jpg'}
                alt="img"
                height={310}
                width={546}
                objectFit="cover"
                className="h-full w-full"
              />
            </div>
            <div className="h-[149px] w-[90%] lg:w-[514px] bg-white mt-[-5rem] shadow-md flex flex-col items-start pl-5">
              <div className="text-[#FFAE00] lg:mt-4 mt-2">News</div>
              <div className="text-[#305176] lg:w-[450px] w-[95%] font-bold mt-0 lg:mt-2 text-xl">
                Millions affected as floods continue to sweep across Bangladesh
              </div>
              <button className="lg:mt-2 mt-0 text-gray-500 font-bold text-lg hover:opacity-90 hover:underline">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstBody
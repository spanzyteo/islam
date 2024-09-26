import React from 'react'
import { logo } from '../../data/logos'
import Image from 'next/image'

const FourthBody = () => {
  return (
    <div className="mt-20 bg-[#F2F2F2] pb-16">
      <div className="md:w-[90%] w-[90%] mx-auto">
        <div className="mt-16 flex items-center gap-4">
          <div className="mt-16 md:h-[100px] h-[80px] w-[20px] bg-[rgb(48,81,118)]"></div>
          <div className="mt-16 text-[#305176] lg:text-4xl text-3xl font-bold">
            Some of our partners
          </div>
        </div>
        <div className="mt-16 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {logo.map((item) => (
            <div
              key={item.id}
              className="h-[67px] w-[101px] sm:w-[156px] xl:h-[134px] xl:w-[118px] sm:h-[62px]"
            >
              <Image
                src={item.image}
                alt="img"
                objectFit="cover"
                height={134}
                width={142}
                className="h-full w-full transition duration-300 ease-in-out grayscale hover:grayscale-0 cursor-pointer"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FourthBody

import React from 'react'
import Image from 'next/image'

const ThirdBody = () => {
  return (
    <div className="mt-16 md:w-[80%] w-[90%] mx-auto">
      <div className="flex items-center gap-4">
        <div className="md:h-[100px] h-[50px] w-[20px] bg-[rgb(48,81,118)]"></div>
        <div className="text-[#305176] lg:text-4xl text-3xl font-bold">
          Campaigns for change
        </div>
      </div>
      <div className="flex items-center mt-10 gap-4">
        <div
          className="h-[438px] lg:w-[366px] md:w-[346px] w-[100%] relative bg-cover bg-center border cursor-pointer overflow-hidden group"
          style={{ backgroundImage: "url('/img-women.webp')" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: "url('/img-women.webp')" }}
          ></div>

          <div
            className="h-[438px] lg:w-[366px] md:w-[346px] w-[100%] absolute transition-all duration-300"
            style={{
              background:
                'linear-gradient(to bottom, rgba(48, 81, 118, 0) 10%, rgba(48, 81, 118, 0.9) 100%)',
            }}
          ></div>
          <div
            className="h-[438px] lg:w-[366px] md:w-[346px] w-[100%] absolute transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{
              backgroundColor: 'rgba(48, 81, 118, 0.6)',
            }}
          ></div>
          <h1 className="font-bold text-2xl text-white z-50 absolute bottom-5 left-[5rem]">
            Women and girls
          </h1>
        </div>
        <div
          className="md:block hidden h-[438px] lg:w-[366px] md:w-[346px] w-[100%] relative bg-cover bg-center border cursor-pointer overflow-hidden group"
          style={{ backgroundImage: "url('/img-women2.webp')" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: "url('/img-women2.webp')" }}
          ></div>

          <div
            className="h-[438px] lg:w-[366px] md:w-[346px] w-[100%] absolute transition-all duration-300"
            style={{
              background:
                'linear-gradient(to bottom, rgba(48, 81, 118, 0) 10%, rgba(48, 81, 118, 0.9) 100%)',
            }}
          ></div>
          <div
            className="h-[438px] lg:w-[366px] md:w-[346px] w-[100%] absolute transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{
              backgroundColor: 'rgba(48, 81, 118, 0.6)',
            }}
          ></div>
          <h1 className="font-bold text-2xl text-white z-50 absolute bottom-5 left-[6rem]">
            Climate change
          </h1>
        </div>
        <div
          className="lg:block hidden h-[438px] lg:w-[366px] md:w-[346px] w-[100%] relative bg-cover bg-center border cursor-pointer overflow-hidden group"
          style={{ backgroundImage: "url('/img-women.webp')" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: "url('/img-women.webp')" }}
          ></div>

          <div
            className="h-[438px] lg:w-[366px] md:w-[346px] w-[100%] absolute transition-all duration-300"
            style={{
              background:
                'linear-gradient(to bottom, rgba(48, 81, 118, 0) 10%, rgba(48, 81, 118, 0.9) 100%)',
            }}
          ></div>
          <div
            className="h-[438px] lg:w-[366px] md:w-[346px] w-[100%] absolute transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{
              backgroundColor: 'rgba(48, 81, 118, 0.6)',
            }}
          ></div>
          <h1 className="font-bold text-2xl text-white z-50 absolute bottom-5 left-[0.25rem] text-center">
            Refugees and displaced people
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ThirdBody

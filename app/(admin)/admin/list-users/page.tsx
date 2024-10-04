import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="md:ml-[400px] ml-[3rem] flex flex-col ">
        <div className="md:mt-[20px] mt-8 mr-[3rem] mb-10">
          <h1 className="text-2xl font-semibold text-gray-600">Customers</h1>
          <div className="flex flex-col mt-6 bg-white shadow-md">
            <div className="flex flex-col gap-2 ml-4 mt-2">
              <h1>Title</h1>
              <h1>Mr</h1>
            </div>
            <div className="mt-2 bg-gray-400 h-[0.05rem]"></div>
            <div className="flex flex-col gap-2 ml-4 mt-2">
              <h1>First Name</h1>
              <h1>Joshua</h1>
            </div>
            <div className="mt-2 bg-gray-400 h-[0.05rem]"></div>
            <div className="flex flex-col gap-2 ml-4 mt-2">
              <h1>Last Name</h1>
              <h1>Titus</h1>
            </div>
            <div className="mt-2 bg-gray-400 h-[0.05rem]"></div>
            <div className="flex flex-col gap-2 ml-4 mt-2">
              <h1>Email</h1>
              <h1>tech@gmail.com</h1>
            </div>
            <div className="mt-2 bg-gray-400 h-[0.05rem]"></div>
            <div className="flex flex-col gap-2 ml-4 mt-2">
              <h1>Contact Number</h1>
              <h1>08285372216</h1>
            </div>
            <div className="mt-2 bg-gray-400 h-[0.05rem]"></div>
            <div className="flex flex-col gap-2 ml-4 mt-2">
              <h1>Address 1</h1>
              <h1>opp front of trailer jorge</h1>
            </div>
            <div className="mt-2 bg-gray-400 h-[0.05rem]"></div>
            <div className="flex flex-col gap-2 ml-4 mt-2">
              <h1>Address 1</h1>
              <h1>opp front of trailer jorge mansion</h1>
            </div>
            <div className="mt-2 bg-gray-400 h-[0.05rem]"></div>
            <div className="flex flex-col gap-2 ml-4 mt-2">
              <h1>Town city</h1>
              <h1>Lagos</h1>
            </div>{' '}
            <div className="mt-2 bg-gray-400 h-[0.05rem]"></div>
            <div className="flex flex-col gap-2 ml-4 mt-2">
              <h1>Country</h1>
              <h1>Nigeria</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

import { FcSalesPerformance } from 'react-icons/fc'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { AiOutlineProduct } from 'react-icons/ai'
import { FaShoppingBag } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className="md:ml-[400px] ml-[3rem] flex flex-col">
      <div className="md:mt-[200px] mt-8 grid md:grid-cols-2 grid-cols-1 gap-8 mr-[3rem]">
        <div className="h-[150px] shadow-md bg-white flex items-center">
          <div className="h-[80px] w-[80px] ml-8">
            <FcSalesPerformance className="h-full w-full" />
          </div>
          <div className="flex flex-col items-start ml-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#01aef0]">
              24k
            </h1>
            <h1 className="text-gray-700 font-semibold">Sales</h1>
          </div>
        </div>
        <div className="h-[150px] shadow-md bg-white flex items-center">
          <div className="h-[80px] w-[80px] ml-8">
            <BsEmojiSmileFill className="h-full w-full text-[#01aef0]" />
          </div>
          <div className="flex flex-col items-start ml-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#01aef0]">
              24m
            </h1>
            <h1 className="text-gray-700 font-semibold">Customers</h1>
          </div>
        </div>
        <div className="h-[150px] shadow-md bg-white flex items-center">
          <div className="h-[80px] w-[80px] ml-8">
            <AiOutlineProduct className="h-full w-full text-[#01aef0]" />
          </div>
          <div className="flex flex-col items-start ml-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#01aef0]">
              15k
            </h1>
            <h1 className="text-gray-700 font-semibold">Products</h1>
          </div>
        </div>
        <div className="h-[150px] shadow-md bg-white flex items-center">
          <div className="h-[80px] w-[80px] ml-8">
            <FaShoppingBag className="h-full w-full text-[#01aef0]" />
          </div>
          <div className="flex flex-col items-start ml-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#01aef0]">
              180m
            </h1>
            <h1 className="text-gray-700 font-semibold">Revenue</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

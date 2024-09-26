import Image from 'next/image'
import Link from 'next/link'

const DonateDiv = () => {
  return (
    <div className="mt-40 flex justify-center mx-auto">
      <div className="md:w-[784px] sm:w-[95%] w-[100%] md:h-[505px] h-[515px] md:max-h-[504px] bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-10">
        <div className="text-[#01aef0] uppercase md:text-4xl text-3xl font-bold md:block hidden ">
          Make your donation
        </div>
        <div className="text-[#01aef0] md:hidden flex flex-col items-center uppercase text-4xl font-bold">
          <h1>Make your </h1>
          <h1>Donation</h1>
        </div>
        <div className="md:w-[606px] md:h-[220px] sm:w-[80%] w-[90%] h-[30%]">
          <Image
            src={'/banner.webp'}
            alt="img"
            width={606}
            height={220}
            objectFit="cover"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row text-4xl sm:gap-0 gap-4 font-bold w-[90%] md:w-[50%] justify-center items-center">
          <Link href={'/donate/monthly'}>
            <button className="border-2 border-[#01aef0] bg-[#01aef0] p-2 uppercase text-white">
              Monthly
            </button>
          </Link>
          <Link href={'/donate/one-off'}>
            <button className="border-2 border-[#01aef0] p-2 px-[1.1rem] lg:px-0 uppercase text-[#555] hover:bg-gray-300 transition-all duration-300 ease-in-out">
              One-Off
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DonateDiv

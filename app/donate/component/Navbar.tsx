import Image from "next/image"
import { FaCartShopping } from 'react-icons/fa6'
import { IoMdArrowDropdown } from 'react-icons/io'


const Navbar = () => {
  return (
    <div className="h-[60px] fixed top-0 w-full left-0 shadow-md flex items-center justify-around lg:gap-[24rem] bg-white">
      <div className="w-[121px] h-full mr-0 md:mr-[20rem]">
        <Image
          src={'/logo-d.svg'}
          alt="img"
          width={121}
          height={80}
          className="h-full w-full"
          objectFit="cover"
        />
      </div>
      <div className="flex items-center">
        <FaCartShopping className="h-[20px] w-[20px]" />
        <IoMdArrowDropdown className="h-[20px] w-[20px]" />
      </div>
    </div>
  )
}

export default Navbar

import Image from "next/image"

const DonateFooter = () => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="h-[67x] w-[200px]">
        <Image
          src={'/footer-img.png'}
          alt="img"
          height={76}
          width={200}
          className="h-full w-full"
          objectFit="cover"
        />
      </div>
      <div className="mt-8 text-[#999999] flex flex-col gap-4 items-center mb-16 w-[90%] text-center">
        <h1>
          Privacy Policy | Other ways to donate (phone,post & bank transfer)
        </h1>
        <h1>
          © Copyrights 2024 Islamic Relief Worldwide, Inc. All rights reserved.
          Registered Charity No. 328158
        </h1>
      </div>
    </div>
  )
}

export default DonateFooter

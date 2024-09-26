'use client'
import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax'
import Image from 'next/image'

const Banner: React.FC = () => {
  const slides = [
    {
      src: '/img1.webp',
      text: '/img-40.webp',
      text1: '40 YEARS OF ISLAMIC RELIEF'
    },
    {
      src: '/img2.jpg',
      text: '/img-emg.webp'
    },
    {
      src: '/img3.jpg'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <>
      <Parallax
        className="w-[100%] lg:h-[640px] h-[75vh] border border-black relative"
        bgImage={slides[currentIndex].src}
        bgImageStyle={{ objectFit: 'cover', height: '100%', width: '100%' }}
        strength={300}
      >
        <div className="absolute md:top-[14rem] top-[16rem] md:left-[40%] left-[20%] h-[200px] w-[200px]">
          {slides[currentIndex].text && (
            <Image
              src={slides[currentIndex].text}
              alt="img"
              objectFit="cover"
              layout=""
              width={200}
              height={200}
              className="h-full w-full"
            />
          )}
        </div>
        <div className="absolute md:top-[27rem] top-[29rem] left-[8%] md:left-[35%] text-2xl text-white font-bold">
          {slides[currentIndex].text1}
        </div>
      </Parallax>
    </>
  )
}

export default Banner

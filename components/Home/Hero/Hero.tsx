"use client";
import { BaseInfo } from '@/Data/data'
import Image from 'next/image'

import React from 'react'
import { FaDownload } from 'react-icons/fa'

const Hero = () => {

  const handleResumeDownload=()=>{
    const link = document.createElement("a");
    link.href = "/Atharva_resume.pdf";
    link.download = "Atharva_resume.pdf"; 
    link.click();
  }


  return (
    <div className='w-full pt-[4vh]  md:pt-[12vh]  h-[60vh] lg:h-screen bg-[#0f0715] overflow-hidden relative '>
        <div className='flex lg:justify-center justify-end flex-col w-4/5 lg:h-full h-[80%]  mx-auto border-0  border-white '>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 border-white'>
            {/* text content*/}
            <div className='border-white'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'> 
                I am {BaseInfo.name}
              </h1>
              <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
               md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4 rem] text-white '>
                {BaseInfo.position}
              </h1>
              <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>
                {BaseInfo.description}
              </p>
              <button className='md:px-8 md:py-2.5 py-1.5 px-6 font-semibold text-sm md:text-lg
              transition-all duration-200 bg-blue-700 flex items-center space-x-2 hover:bg-blue-900
              rounded-lg mt-8 text-white'
              onClick={handleResumeDownload}
              >
                <span> Download CV</span>
                <FaDownload/>
              </button>
            </div>
            {/* img content*/}
            <div className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden '>
              <Image
                src={BaseInfo.profilepic} 
                alt={BaseInfo.name} 
                width={450} height={300}/>
              
            </div>


          </div>
           
        </div>

    </div>
  )
}

export default Hero
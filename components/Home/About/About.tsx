import SectionHeading from '@/components/helper/SectionHeading'
import { AboutInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
       <SectionHeading> About me </SectionHeading>
       <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 '>
        {/* <p className='text-white'>hi</p> */}
            <div className='border-0 border-amber-50'>
                <h1 className=' text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
                    {AboutInfo.title}
                </h1>
                <p className='mt-6 text-base text-white'>
                    {AboutInfo.description}
                </p>
                <div className='mt-6 mb-6 space-y-4'>
                    <div className='flex gap-3'>
                        <FaCheck className='text-white bg-blue-600 h-[25] w-[25] p-[4] '/>
                        <p className='text-white'>Frontend Development</p>
                    </div>
                                        <div className='flex gap-3'>
                        <FaCheck className='text-white bg-red-600 h-[25] w-[25] p-[4] '/>
                        <p className='text-white'>Backend Development</p>
                    </div>
                                        <div className='flex gap-3'>
                        <FaCheck className='text-white bg-green-600 h-[25] w-[25] p-[4] '/>
                        <p className='text-white'>Full Stack Development</p>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-2 items-center text-center gap-16  lg:mx-auto border-0 border-amber-50'>
                <div>
                    <Image
                        src={'/images/customer.png'} 
                        alt='img'
                        width={80}
                        height={80}
                        className='mx-auto'
                    />
                    <p className='mt-3 font-bold text-xl  text-white' >0</p>
                    <p className='text-base sm:text-lg text-gray-400 '>Satisfied customers</p>
                </div>
                <div>
                    <Image
                        src={'/images/experience.png'} 
                        alt='img'
                        width={80}
                        height={80}
                        className='mx-auto'
                    />
                    <p className='mt-3 font-bold text-xl  text-white' >{AboutInfo.experience}</p>
                    <p className='text-base sm:text-lg text-gray-400 '>Year Experience</p>
                </div>
                <div>
                    <Image
                        src={'/images/completed.png'} 
                        alt='img'
                        width={80}
                        height={80}
                        className='mx-auto'
                    />
                    <p className='mt-3 font-bold text-xl  text-white' >{AboutInfo.project}</p>
                    <p className='text-base sm:text-lg text-gray-400 '>projects</p>
                </div>
                <div>
                    <Image
                        src={'/images/rocket.png'} 
                        alt='img'
                        width={80}
                        height={80}
                        className='mx-auto'
                    />
                    <p className='mt-3 font-bold text-xl  text-white' >{AboutInfo.website}</p>
                    <p className='text-base sm:text-lg text-gray-400 '>Websites</p>
                </div>

            </div>
       </div>
    </div>
  )
}

export default About
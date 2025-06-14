'use client'
import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';
type props={
    service: {
    id: number;
    title: string;
    description: string;
    icon: string;
}
}

const ServiceCard = ({service}:props) => {
  return (
    <Tilt className=' shadow-2xl p-6 rounded-lg bg-[#814ced]  '>
        <Image src={service.icon} alt='img' height={50} width={50}/>
        <h1 className='mt-4 text-lg font-bold text-gray-100'>{service.title}</h1>
        <p className='mt-3 text-white text-sm text-opacity-80 '>{service.description}</p>
    </Tilt>
  )
}

export default ServiceCard
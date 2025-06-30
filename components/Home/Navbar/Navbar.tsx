'use client'
import { navLinks } from '@/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight} from 'react-icons/hi2'


type props ={
    NavHandler :()=> void;
}

const Navbar = ({NavHandler} : props) => {

    return (
        <div className=' fixed h-[12vh] z-[10]  w-full   '>

            <div className=' flex items-center h-full w-[95%]  justify-between'>
                <p className=' text-xl text-white ml-[1.5rem]'>Atharva's Devfolio</p>
    {/*Nav-links*/}
                <div className='flex items-center space-x-10 text-white '>
                    <div className='hidden lg:flex items-center space-x-8  '>
                        {navLinks.map((navlink)=>{
                            return<Link key={navlink.id} href={`#${navlink.label.toLowerCase()}`} > 
                                <p className='nav__links uppercase'>
                                    {navlink.label}
                                </p> 
                            </Link>
                        })}
                    </div>
    {/*Buttons*/}
                    <div className=' flex items-center space-x-4'>
                        <button className='md:px-10 md:py-3 px-8 py-3 border-1 text-blue-800 font-semibold sm:text-base text-sm bg-white rounded-2xl hover:bg-gray-200 transition-all duration-300 '>
                            Hire me
                        </button>
                        {/*Burger icon*/}
                        <HiBars3BottomRight onClick={NavHandler} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
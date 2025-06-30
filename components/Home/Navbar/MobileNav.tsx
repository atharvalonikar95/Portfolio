import { navLinks } from '@/constants/constants'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type props={
  showNav : boolean;
  NavHandler : ()=> void;
}

const MobileNav = ({showNav,NavHandler}:props) => {

  const navOpen = showNav ? "translate-x-0":"translate-x-[-100%]"

  return (
    <div>
      {/*overlay*/}
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}>
        {/* Nav links*/}
        <div className={`text-white fixed ${navOpen} transform transition-all duration-500 delay-100 justify-center flex flex-col h-full w-[80%] sm:w-[60%]
         bg-[#092b47fc] space-x-6 z-[10000] space-y-2 `}>
                                  {navLinks.map((navlink)=>{
                                      return<Link key={navlink.id}  href={`#${navlink.label.toLowerCase()}`} > 
                                          <p className='nav__links text-[20px] ml-12 border-b-[1.5px] sm:text-[30px] uppercase  '>
                                              {navlink.label}
                                          </p> 
                                      </Link>
                                  })}
        {/* close button*/}
        <CgClose onClick={NavHandler} className='absolute top-[2rem] right-[1.8rem] sm:w-8 w-6 h-6 text-white '/>
        </div>
      </div>
      
    </div>
  )
}

export default MobileNav
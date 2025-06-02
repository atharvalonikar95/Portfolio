'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav,setShowNav] = useState(false);

  const NavHandler=()=>{
    setShowNav(!showNav);
  }

  return (
    <div>
        <Navbar NavHandler={NavHandler}/>
        <MobileNav showNav={showNav} NavHandler={NavHandler}/>
    </div>
  )
}

export default ResponsiveNav
import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import {
  useAppKit
} from "@reown/appkit/react";

const Nav = () => {
  const { open } = useAppKit()

  return (
    <header className='lg:flex md:flex hidden justify-between items-center w-[90%] mx-auto py-6'>
        <Link to='/' className='cursor-pointer'><img src={logo} alt="" /></Link>
          <button onClick={() => open()} className='bg-primary py-4 px-8 font-Lora font-[700] rounded-lg cursor-pointer hover:bg-transparent hover:border-2  hover:border-white'>Connect Wallet</button>       
    </header>
  )
}

export default Nav
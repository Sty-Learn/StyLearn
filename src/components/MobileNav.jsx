import React from 'react'
import logo from '../assets/favicon.svg'
import { Link } from 'react-router-dom'

const MobileNav = () => {
  return (
    <header className='lg:hidden md:hidden flex  justify-between items-center w-[90%] mx-auto py-6'>
    <Link to='/' className='cursor-pointer'><img src={logo} alt="" className='w-[60px] h-[60px]'/></Link>
    <Link to='browse'> <button className='bg-primary py-4 px-6 font-Lora font-[700] rounded-lg cursor-pointer hover:bg-transparent hover:border-2  hover:border-white text-[16px]'>Connect Wallet</button></Link>
</header>
  )
}

export default MobileNav
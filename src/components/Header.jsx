import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='flex justify-between items-center w-[90%] mx-auto py-6'>
        <img src={logo} alt="" />
        <button className='bg-primary py-4 px-8 font-Lora font-[700] rounded-lg'>Browse Courses</button>
    </header>
  )
}

export default Header
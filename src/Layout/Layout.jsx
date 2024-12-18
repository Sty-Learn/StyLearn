import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col h-[100vh]'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'
import EditorUI from '../components/EditorUI'
import DashboardNav from '../components/DashboardNav'

const DashboardLayout = () => {
  return (
    <div >
        <DashboardNav />
        <div className='flex justify-between'>
        <Outlet />
        <EditorUI />
        </div>
    </div>
  )
}

export default DashboardLayout
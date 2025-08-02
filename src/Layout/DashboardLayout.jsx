import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import DashboardNav from '../components/DashboardNav'
import DesktopOnlyPage from '../components/DesktopOnlyPage'
import { useAppKitAccount } from "@reown/appkit/react";

const DashboardLayout = () => {
    const { isConnected } = useAppKitAccount()

    return !isConnected  ? <Navigate to={"/"} /> : (
    <div >
        <DesktopOnlyPage>
        <DashboardNav />
        <div className='flex justify-between'>
        <Outlet />
        </div>
        </DesktopOnlyPage>
    </div>
  ) 
}

export default DashboardLayout
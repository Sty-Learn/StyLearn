import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import EditorUI from '../components/EditorUI'
import DashboardNav from '../components/DashboardNav'
import DesktopOnlyPage from '../components/DesktopOnlyPage'
import { useAppKitAccount } from "@reown/appkit/react";

const DashboardLayout = () => {
    const { isConnected } = useAppKitAccount()

    return isConnected  && (
    <div >
        <DesktopOnlyPage>
        <DashboardNav />
        <div className='flex justify-between'>
        <Outlet />
        <EditorUI />
        </div>
        </DesktopOnlyPage>
    </div>
  )
}

export default DashboardLayout
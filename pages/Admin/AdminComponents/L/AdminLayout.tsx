import React from 'react'
import Navbar from '../N/Navbar'
import SubNavbar from '../S/SubNavbar'

const AdminLayout = ({children}:any) => {
  return (
    <div className="flex w-full">
            <Navbar />
            <div className="main-body-area h-screen overflow-scroll overflow-x-hidden relative z-30 bg-gray-300">
                <SubNavbar />
                <div className="body px-12 py-10 text-justify">
                    {children}
                </div>
            </div>
        </div>
  )
}

export default AdminLayout

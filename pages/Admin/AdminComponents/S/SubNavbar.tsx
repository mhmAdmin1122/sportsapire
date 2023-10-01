import Link from 'next/link';
import React from 'react'
import { FaHome, FaStickyNote, FaChartPie } from 'react-icons/fa'

const SubNavbar = () => {
  return (
    <nav className='subnav w-[full] px-6 text-xl text-[#fff] bg-black h-[70px] flex flex-wrap items-center justify-between'>
      <div className='flex flex-wrap items-center gap-4 justify-center'>

        <Link href={"/"}><b className='w-[40px] h-[40px] flex flex-wrap subnav_ico justify-center text-2xl transition-all duration-1000 items-center rounded-full hover:bg-[#fff] hover:text-[#000]'><FaHome /></b></Link>

        <b className='w-[40px] h-[40px] flex flex-wrap subnav_ico justify-center text-2xl transition-all duration-1000 items-center rounded-full hover:bg-[#fff] hover:text-[#000]'><FaStickyNote /></b>

        <b className='w-[40px] h-[40px] flex flex-wrap subnav_ico justify-center text-2xl transition-all duration-1000 items-center rounded-full hover:bg-[#fff] hover:text-[#000]'><FaChartPie /></b>

        <b className='w-[40px] h-[40px] flex flex-wrap subnav_ico justify-center text-2xl transition-all duration-1000 items-center rounded-full hover:bg-[#fff] hover:text-[#000]'><FaHome /></b>

      </div>

    </nav>
  )
}

export default SubNavbar;
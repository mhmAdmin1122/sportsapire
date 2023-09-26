import React from 'react'
import logo from '@/public/img/LOGO.png'
import Link from 'next/link'
import ImageBox from '../I/ImageBox'

const NavBar = () => {
    return (
        <nav className='flex flex-wrap items-center justify-between px-10 bg-[#0f0d31] h-[80px] text-[#fff] w-full'>

            {/* Logo */}
            <Link href={"/"} className="w-[120px] h-[80px]">
                <ImageBox SRC={logo} ALT="logo"/>
            </Link>

            <ul className="flex flex-wrap items-center gap-12 text-xl font-bold">
                <Link href={"/"}><li className=''>Home</li></Link>
                <Link href={"/"}><li className=''>Live</li></Link>
                <Link href={"/"}><li className=''>Shop</li></Link>
                <Link href={"/"}><li className=''>Schedule</li></Link>
                <Link href={"/"}><li className=''>Help</li></Link>
            </ul>

            <div className="sign_in_out border-2 border-[#ff59bf] p-[2px] rounded-full">
                <button className='SignIn bg-[#ff59bf] text-[#fff] px-5 py-2 rounded-full text-lg font-semibold'>Sign In</button>
            </div>

        </nav>
    )
}

export default NavBar

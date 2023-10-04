import React, { useState } from 'react'
import logo from '@/public/img/LOGO.png'
import Link from 'next/link'
import ImageBox from '../I/ImageBox'
import { MdOutlineMenuBook } from 'react-icons/md'

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event: any) => {
        setIsActive(current => !current);
    };

    return (
        <nav className='navbar_site_box relative flex flex-wrap items-center justify-between px-10 bg-[#0f0d31] h-[80px] text-[#fff] w-full'>

            {/* Logo */}
            <Link href={"/"} className="w-[120px] h-[80px] logo_pic">
                <ImageBox SRC={logo} ALT="logo" />
            </Link>

            <ul className="siteNavbar_tabs flex flex-wrap items-center gap-12 text-xl font-bold">
                <Link href={"/"}><li className=''>Home</li></Link>
                <Link href={"/SubPages/live"}><li className=''>Live</li></Link>
                <Link href={"/SubPages/shop"}><li className=''>Shop</li></Link>
                <Link href={"/SubPages/schedule"}><li className=''>Schedule</li></Link>
                <Link href={"/SubPages/help"}><li className=''>Help</li></Link>
            </ul>

            <button className='menuIcon_MobileView_Tabs text-2xl font-bold' onClick={handleClick}><MdOutlineMenuBook /></button>
            {isActive && <div className="mobileMenuList">
                <Link href={"/SubPages/live"}><li className=''>Live</li></Link>
                <Link href={"/SubPages/shop"}><li className=''>Shop</li></Link>
                <Link href={"/SubPages/schedule"}><li className=''>Schedule</li></Link>
                <Link href={"/SubPages/help"}><li className=''>Help</li></Link>
            </div>}
        </nav>
    )
}

export default NavBar

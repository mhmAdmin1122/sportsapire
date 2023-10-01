import React from 'react'
import ImageBox from '../I/ImageBox'
import Logo from '@/public/img/LOGO2.png'
import user from '@/public/img/user.jpg'
import Link from 'next/link'
import { FaComments, FaAngleDoubleRight, FaShoppingCart, FaUsers, FaPencilRuler } from 'react-icons/fa'
import { MdReportProblem, MdArticle, MdMovieFilter, MdSettingsInputComponent, MdPower } from 'react-icons/md'

const Navbar = () => {
    return (
        <nav className='navbar relative w-[330px] border-r-2 border-[#ececec] pt-3 h-screen text-xl font-bold'>

            <div className="flex items-center justify-center gap-2 px-12 border-b-2 border-gray-200 py-2 mb-6">
                <div className='w-160px'>
                    <ImageBox SRC={Logo} ALT="Logo" />
                </div>
                <h2 className='text-3xl font-bold cursor-context-menu'>Admin</h2>
            </div>

            <div className="admin-tabslist grid justify-between items-center px-12 h-[445px] overflow-scroll py-3">

                <div className="navbar_tabs grid items-center gap-5">

                    <Link href={"/Admin/AdminPages/comments"} className='flex flex-wrap items-center gap-3'>
                        <b><FaComments /></b>
                        <h2>Comments</h2>
                    </Link>

                    <Link href={"/Admin/AdminPages/feedback"} className='flex flex-wrap items-center gap-3'>
                        <b><FaAngleDoubleRight /></b>
                        <h2>FeedBack</h2>
                    </Link>

                    <Link href={"/Admin/AdminPages/Problems"} className='flex flex-wrap items-center gap-3'>
                        <b><MdReportProblem /></b>
                        <h2>Problems</h2>
                    </Link>

                    <Link href={"/Admin/AdminPages/Article"} className='flex flex-wrap items-center gap-3'>
                        <b><MdArticle /></b>
                        <h2>Post Article</h2>
                    </Link>

                    <Link href={"/Admin/AdminPages/shop"} className='flex flex-wrap items-center gap-3'>
                        <b><FaShoppingCart /></b>
                        <h2>E-commerce</h2>
                    </Link>

                    <Link href={"/Admin/AdminPages/UserList"} className='flex flex-wrap items-center gap-3'>
                        <b><FaUsers /></b>
                        <h2>User List</h2>
                    </Link>

                    <Link href={"/Admin/AdminPages/AdminTheme"} className='flex flex-wrap items-center gap-3'>
                        <b><FaPencilRuler /></b>
                        <h2>Admin Theme</h2>
                    </Link>

                    <Link href={"/Admin/AdminPages/channels"} className='flex flex-wrap items-center gap-3'>
                        <b><MdMovieFilter /></b>
                        <h2>Channel Uploader</h2>
                    </Link>

                    <Link href={"/Admin/AdminPages/Setting"} className='flex flex-wrap items-center gap-3'>
                        <b><MdSettingsInputComponent /></b>
                        <h2>Setting</h2>
                    </Link>

                </div>
            </div>

            <div className="loginInfo relative -top-2 flex flex-wrap items-center justify-center w-[290px] gap-3 h-auto px-5 py-2 rounded-md ml-4">
                <div className="image_Box w-[60px] h-[60px]">
                    <ImageBox SRC={user} ALT="USER_PIC" clasExtra='rounded-full' />
                </div>
                <div className="user_Name">
                    <h2 className='text-xl font-bold'>Admin_1913</h2>
                    <p className='text-[16px] text-gray-400 font-medium'>Developer</p>
                </div>
                <div className="text-[#fff] logOutico text-3xl bg-[#000] cursor-pointer transition-all duration-1000 p-2 rounded-full shadow-green-600"><MdPower /></div>
            </div>
        </nav>
    )
}

export default Navbar

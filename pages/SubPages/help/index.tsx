import Layout from '@/pages/Components/L/Layout'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>Help</title>
            </Head>
            <Layout>
                <div className="helpForm px-14 py-12 grid justify-items-start justify-center w-full gap-8">

                    <h1 className='text-4xl font-bold flex flex-wrap justify-center w-full'>Help</h1>

                    <div className="form_card flex flex-wrap items-center justify-center w-[620px] gap-4 text-center">

                        <div className="w-[290px] h-[190px] transition-all duration-1000 hover:w-[310px] flex flex-wrap items-center justify-center text-3xl font-bold border-2 border-[#ececec] shadow-md shadow-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-context-menu text-center text-[#fff] rounded-lg">
                            <h1 className='cursor-pointer'>Contact US</h1>
                        </div>

                        <div className="w-[290px] h-[190px] transition-all duration-1000 hover:w-[310px] flex flex-wrap items-center justify-center text-3xl font-bold border-2 border-[#ececec] shadow-md shadow-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-context-menu text-center text-[#fff] rounded-lg">
                            <h1 className='cursor-pointer'>Describe Your Problems</h1>
                        </div>

                        <div className="w-[290px] h-[190px] transition-all duration-1000 hover:w-[310px] flex flex-wrap items-center justify-center text-3xl font-bold border-2 border-[#ececec] shadow-md shadow-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-context-menu text-center text-[#fff] rounded-lg">
                            <h1 className='cursor-pointer'>Map Direction</h1>
                        </div>

                        <div className="w-[290px] h-[190px] transition-all duration-1000 hover:w-[310px] flex flex-wrap items-center justify-center text-3xl font-bold border-2 border-[#ececec] shadow-md shadow-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-[#fff] rounded-lg">
                            <h1 className='cursor-pointer'>FeedBack</h1>
                        </div>

                    </div>

                </div>
            </Layout>
        </>
    )
}

export default index

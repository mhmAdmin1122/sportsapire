import Layout from '@/pages/Components/L/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react'

const Schedule = () => {

    const [cricket, setCricket] = useState(true)
    const [football, setFootball] = useState(false)
    const [tennis, setTennis] = useState(false)
    const [wwe, setWwe] = useState(false)

    const handleCricket = () => {
        setCricket(true)
        setFootball(false)
        setTennis(false)
        setWwe(false)
    }

    const handleFootBall = () => {
        setCricket(false)
        setFootball(true)
        setTennis(false)
        setWwe(false)
    }

    const handleTennis = () => {
        setCricket(false)
        setFootball(false)
        setTennis(true)
        setWwe(false)
    }

    const handleWWE = () => {
        setCricket(false)
        setFootball(false)
        setTennis(false)
        setWwe(true)
    }

    return (
        <>

            <Head>
                <title>Sport Schedule</title>
                <meta name="description" content="sports sapire sport schedual" />
            </Head>

            <Layout>

                <div className='px-12 py-12 grid justify-items-center justify-center gap-6'>

                    <h1 className='text-4xl font-bold text-center cursor-context-menu'>Sport Schedule</h1>

                    <ul className='flex flex-wrap items-center gap-5 bg-[#ff59bf] px-10 w-fit font-bold text-[#fff] rounded-md'>
                        <li className='cursor-pointer hover:bg-[#ec92cab7] px-3 py-4' onClick={handleCricket}>Cricket</li>
                        <li className='cursor-pointer hover:bg-[#ec92cab7] px-3 py-4' onClick={handleFootBall}>FootBall</li>
                        <li className='cursor-pointer hover:bg-[#ec92cab7] px-3 py-4' onClick={handleTennis}>Tennis</li>
                        <li className='cursor-pointer hover:bg-[#ec92cab7] px-3 py-4' onClick={handleWWE}>WWE</li>
                    </ul>

                    {cricket && <div className='flex flex-wrap justify-center gap-4 w-[600px]'>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>2023 Schedule</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>CWC23 MATCHES</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>PAKISTAN MATCHES</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>PSL MATCHES</h1></Link>
                        </div>
                    </div>}

                    {football && <div className='flex flex-wrap justify-center gap-4 w-[600px]'>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>2023 Schedule</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>LaLiga MATCHES</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>Carabao Cup</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>Viaplay Cup</h1></Link>
                        </div>
                    </div>}

                    {tennis && <div className='flex flex-wrap justify-center gap-4 w-[600px]'>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>2023 Schedule</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>Rolex Shanghai Masters</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>Japan Open Tennis Championships</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>European Open</h1></Link>
                        </div>
                    </div>}

                    {wwe && <div className='flex flex-wrap justify-center gap-4 w-[600px]'>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>2023 Schedule</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>Royal Rumbel Matches</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>WWE RAW</h1></Link>
                        </div>
                        <div className="w-[280px] h-[180px] text-center px-12 py-12 font-bold text-2xl rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#fff] border-2 border-gray-200 flex flex-wrap items-center justify-center shadow-md shadow-gray-300">
                            <Link href={"/SubPages/schedule"}><h1>SMACDOWN</h1></Link>
                        </div>
                    </div>}

                </div>

            </Layout>

        </>
    )
}

export default Schedule;
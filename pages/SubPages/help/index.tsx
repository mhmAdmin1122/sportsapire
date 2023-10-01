import Layout from '@/pages/Components/L/Layout'
import Head from 'next/head'
import React, { useState } from 'react'

const Help = () => {
    const [conatctUs, setConatctUs] = useState(false)
    const [problems, setProblems] = useState(false)
    const [mapDirection, setMapDirection] = useState(false)
    const [feedback, setFeedback] = useState(false)

    const closeBtnHandle = () => {
        setConatctUs(false)
        setProblems(false)
        setMapDirection(false)
        setFeedback(false)
    }

    const contactBtnHandle = () => {
        setConatctUs(true)
        setProblems(false)
        setMapDirection(false)
        setFeedback(false)
    }

    const problemsBtnHandle = () => {
        setConatctUs(false)
        setProblems(true)
        setMapDirection(false)
        setFeedback(false)
    }

    const mapDirecBtnHandle = () => {
        setConatctUs(false)
        setProblems(false)
        setMapDirection(true)
        setFeedback(false)
    }

    const feedBackBtnHandle = () => {
        setConatctUs(false)
        setProblems(false)
        setMapDirection(false)
        setFeedback(true)
    }

    return (
        <>
            <Head>
                <title>Help</title>
            </Head>
            <Layout>
                <div className="relative px-14 py-12 grid justify-items-start justify-center w-full gap-8">

                    <h1 className='text-4xl font-bold flex flex-wrap justify-center w-full'>Help</h1>

                    <div className="form_card flex flex-wrap items-center justify-center w-[620px] gap-4 text-center">

                        <div className="w-[290px] h-[190px] transition-all duration-1000 hover:w-[310px] flex flex-wrap items-center justify-center text-3xl font-bold border-2 border-[#ececec] shadow-md shadow-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-context-menu text-center text-[#fff] rounded-lg" onClick={contactBtnHandle}>
                            <h1 className='cursor-pointer' onClick={contactBtnHandle}>Contact US</h1>
                        </div>

                        <div className="w-[290px] h-[190px] transition-all duration-1000 hover:w-[310px] flex flex-wrap items-center justify-center text-3xl font-bold border-2 border-[#ececec] shadow-md shadow-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-context-menu text-center text-[#fff] rounded-lg" onClick={problemsBtnHandle}>
                            <h1 className='cursor-pointer'>Describe Your Problems</h1>
                        </div>

                        <div className="w-[290px] h-[190px] transition-all duration-1000 hover:w-[310px] flex flex-wrap items-center justify-center text-3xl font-bold border-2 border-[#ececec] shadow-md shadow-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-context-menu text-center text-[#fff] rounded-lg" onClick={mapDirecBtnHandle}>
                            <h1 className='cursor-pointer'>Map Direction</h1>
                        </div>

                        <div className="w-[290px] h-[190px] transition-all duration-1000 hover:w-[310px] flex flex-wrap items-center justify-center text-3xl font-bold border-2 border-[#ececec] shadow-md shadow-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-[#fff] rounded-lg" onClick={feedBackBtnHandle}>
                            <h1 className='cursor-pointer'>FeedBack</h1>
                        </div>

                    </div>

                    {conatctUs && <div className="absolute grid justify-center z-20 bg-[#1f1e1ed5] px-20 py-9 w-full">
                        <div className='absolute right-0'>
                            <button className='text-[#fff] bg-red-600 px-4 py-2 rounded-md text-xl font-bold flex items-center justify-center' onClick={closeBtnHandle}>X</button>
                        </div>
                        <form className='grid justify-center gap-3 items-center bg-[#000000] px-8 py-4 rounded-lg w-fit'>

                            <h1 className='text-2xl font-bold text-center w-full text-[#fff]'>Contact Us</h1>

                            <label htmlFor="">Full Name: </label>
                            <input type="text" placeholder='Jhon Doe' />

                            <label htmlFor="">Email: </label>
                            <input type="email" placeholder='example@xyz.com' />

                            <label htmlFor="">Mobile: </label>
                            <input type="tel" placeholder='+1-000-0000-00' />

                            <label htmlFor="">Message: </label>
                            <textarea rows={5} cols={5} placeholder='Message' />

                            <div className='flex flex-wrap justify-center'>
                                <button type='submit' className='bg-green-500 text-lg font-semibold text-[#ececec]'>Submit</button>
                            </div>

                        </form>
                    </div>}
                    
                    {problems && <div className="absolute grid justify-center z-20 bg-[#1f1e1ed5] px-20 py-9 w-full h-screen">
                        <div className='absolute right-0'>
                            <button className='text-[#fff] bg-red-600 px-4 py-2 rounded-md text-xl font-bold flex items-center justify-center' onClick={closeBtnHandle}>X</button>
                        </div>
                        <form className='grid justify-center gap-3 items-center bg-[#000000] px-8 py-4 rounded-lg w-fit'>
                            <h1 className='text-2xl font-bold text-center w-full text-[#fff]'>Describe Your Problems</h1>
                            <label htmlFor="">Email: </label>
                            <input type="email" placeholder='example@xyz.com' />
                            <label htmlFor="">Message: </label>
                            <textarea rows={5} cols={5} placeholder='Message' />
                            <div className='flex flex-wrap justify-center'>
                                <button type='submit' className='bg-green-500 text-lg font-semibold text-[#ececec]'>Submit</button>
                            </div>

                        </form>
                    </div>}

                    {mapDirection && <div className="absolute grid justify-center z-20 bg-[#1f1e1ed5] px-20 py-9 w-full h-screen">
                        <div className='absolute right-0'>
                            <button className='text-[#fff] bg-red-600 px-4 py-2 rounded-md text-xl font-bold flex items-center justify-center' onClick={closeBtnHandle}>X</button>
                        </div>
                        <form className='grid justify-center gap-3 items-center bg-[#000000] px-8 py-4 rounded-lg w-fit'>

                            <h1 className='text-2xl font-bold text-center w-full text-[#fff]'>Map Direction</h1>

                            <b className='text-[#fff]'>coming soon....</b>

                        </form>
                    </div>}

                    {feedback && <div className="absolute grid justify-center z-20 bg-[#1f1e1ed5] px-20 py-9 w-full h-screen">
                        <div className='absolute right-0'>
                            <button className='text-[#fff] bg-red-600 px-4 py-2 rounded-md text-xl font-bold flex items-center justify-center' onClick={closeBtnHandle}>X</button>
                        </div>
                        <form className='grid justify-center gap-3 items-center bg-[#000000] px-8 py-4 rounded-lg w-fit'>

                            <h1 className='text-2xl font-bold text-center w-full text-[#fff]'>Feedback</h1>


                            <label htmlFor="">Feedback: </label>
                            <textarea rows={5} cols={5} placeholder='Message' />

                            <div className='flex flex-wrap justify-center'>
                                <button type='submit' className='bg-green-500 text-lg font-semibold text-[#ececec]'>Submit</button>
                            </div>

                        </form>
                    </div>}

                </div>
            </Layout>
        </>
    )
}

export default Help

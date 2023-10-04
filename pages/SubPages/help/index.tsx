import ContactUs from '@/pages/Components/C/ContactUs'
import FeedBack from '@/pages/Components/F/FeedBack'
import Layout from '@/pages/Components/L/Layout'
import Problems from '@/pages/Components/P/Problems'
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
                <title>Help || Sport Sapire</title>
                <meta name="description" content="Get Help From Sportsapire.com" />
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
                        <ContactUs />
                    </div>}

                    {problems && <div className="absolute grid justify-center z-20 bg-[#1f1e1ed5] px-20 py-9 w-full h-screen">
                        <div className='absolute right-0'>
                            <button className='text-[#fff] bg-red-600 px-4 py-2 rounded-md text-xl font-bold flex items-center justify-center' onClick={closeBtnHandle}>X</button>
                        </div>
                        <Problems />
                    </div>}

                    {mapDirection && <div className="absolute grid justify-center z-20 bg-[#1f1e1ed5] px-20 py-9 w-full h-screen">
                        <div className='absolute right-0'>
                            <button className='text-[#fff] bg-red-600 px-4 py-2 rounded-md text-xl font-bold flex items-center justify-center' onClick={closeBtnHandle}>X</button>
                        </div>
                        <div className='block h-fit items-center bg-[#000000] px-8 py-4 rounded-lg w-fit'>

                            <h1 className='text-2xl font-bold text-center w-full text-[#fff] my-2'>Map Direction</h1>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.989435208583!2d71.63384697451535!3d29.51666714338558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9ee4e335c893%3A0xdfa510203a0c4dfb!2sGJ8P%2BMH7%2C%20Lodhr%C4%81n%2C%20Lodhran%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1696446165777!5m2!1sen!2sus" width={220} height={180} loading="lazy" className='rounded-md overflow-hidden mb-3' />

                        </div>
                    </div>}

                    {feedback && <div className="absolute grid justify-center z-20 bg-[#1f1e1ed5] px-20 py-9 w-full h-screen">
                        <div className='absolute right-0'>
                            <button className='text-[#fff] bg-red-600 px-4 py-2 rounded-md text-xl font-bold flex items-center justify-center' onClick={closeBtnHandle}>X</button>
                        </div>
                        <FeedBack />
                    </div>}

                </div>
            </Layout>
        </>
    )
}

export default Help

import React from 'react'
import ImageBox from '../I/ImageBox'
import hero from '@/public/img/hero.png'
import { FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const Herobanner = () => {
    return (
        <section className='herobox flex flex-wrap justify-around items-center px-12 pt-12 pb-0'>

            <div className='grid justify-items-left gap-5 w-[50%] main-text_herrobanner'>

                <span className='rooterText flex flex-wrap gap-4 items-center font-bold text-xl text-[#fff] cursor-context-menu'>
                    <FaUsers />
                    <h2>Sport Sapire</h2>
                </span>

                <h1 className='text-4xl font-bold text-[#fff] cursor-context-menu bannerMaintxt'>Watch Your Favourite <br /> Sport FREE & LIVE!</h1>

                <Link href={"/SubPages/live"} className='cursor-context-menu herobannerBtn'>
                    <button className='bg-[#151244] px-6 py-3 text-xl font-bold rounded-lg text-[#fff]'>Watch Live Now!</button>
                </Link>
            </div>

            <div className="w-[50%] h-[auto] hero_pic">
                <Image src={hero} alt="hero-PIC" />
            </div>

        </section>
    )
}

export default Herobanner

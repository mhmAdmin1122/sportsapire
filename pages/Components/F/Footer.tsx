import React from 'react'
import { GiCommercialAirplane } from 'react-icons/gi'
import { PiCopyrightBold } from 'react-icons/pi'
import { FaFacebook, FaYoutube, FaInstagramSquare } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='flex flex-wrap items-center justify-between w-full h-[90px] px-12 py-4 bg-[#151244] text-[#fff] font-bold'>
            <div className="flex flex-wrap items-center gap-2">
                <b><GiCommercialAirplane /></b>
                <address className='cursor-context-menu'>Lodhran, Punjab, Pakistan</address>
            </div>
            <div className="flex flex-wrap items-center gap-2">
                <b><PiCopyrightBold /></b>
                <code className='cursor-context-menu'>2023, All Copyright reserved by Sport Sapire</code>
            </div>
            <div className="flex flex-wrap items-center gap-4">
                <Link href={''} target='_blank'><b className='text-2xl hover:text-[#87ceeb]'><FaFacebook /></b></Link>
                <Link href={''} target='_blank'><b className='text-2xl hover:text-[#ff0000]'><FaYoutube /></b></Link>
                <Link href={'https://instagram.com/sport_sapire?igshid=OGQ5ZDc2ODk2ZA=='} target='_blank'><b className='text-2xl hover:text-[#e75d74]'><FaInstagramSquare /></b></Link>
            </div>
        </footer>
    )
}

export default Footer

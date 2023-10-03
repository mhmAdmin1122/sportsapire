import React from 'react'
import { GiCommercialAirplane } from 'react-icons/gi'
import { PiCopyrightBold } from 'react-icons/pi'
import { FaFacebook, FaYoutube, FaInstagramSquare } from 'react-icons/fa'
import { FaTruckPlane, FaCopyright } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className='webview flex flex-wrap items-center justify-between w-full'>
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
            </div>
            <div className="mobile-vieew_tabView flex flex-wrap text-4xl items-center justify-between px-4 py-4">
                <div className='flex flex-wrap items-center justify-center gap-2'  title="Lodhran, Punjab, Pakistan">
                    <FaTruckPlane />
                    <b className='text-base cursor-context-menu'>Lodhran</b>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-2'  title="2023, All Copyright reserved by Sport Sapire">
                    <FaCopyright />
                    <b className='text-base cursor-context-menu'>Sport Sapire</b>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Link href={''} target='_blank'><b className='text-2xl hover:text-[#87ceeb]'><FaFacebook /></b></Link>
                    <Link href={''} target='_blank'><b className='text-2xl hover:text-[#ff0000]'><FaYoutube /></b></Link>
                    <Link href={'https://instagram.com/sport_sapire?igshid=OGQ5ZDc2ODk2ZA=='} target='_blank'><b className='text-2xl hover:text-[#e75d74]'><FaInstagramSquare /></b></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

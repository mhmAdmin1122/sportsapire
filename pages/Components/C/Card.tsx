import React from 'react'
import ImageBox from '../I/ImageBox'
import Link from 'next/link'
import { PiTelevisionFill } from 'react-icons/pi'

const Card = ({ ChannelName, ChannelCategory, ChannelOwner, SRC }: any) => {
    return (
        <div className='grid justify-items-center w-[286px] h-auto rounded-md overflow-hidden border-2 border-gray-200 shadow-md shadow-gray-300'>
            <div className='w-full h-[124px]'>
                <ImageBox SRC={SRC} ALT={ChannelName} />
            </div>
            <div className="px-6 py-3">
                <h1 className='flex flex-wrap items-center text-2xl font-bold hover:text-[#405d9c] w-fit' title={ChannelName}>
                    <b><PiTelevisionFill /></b>
                    <Link href={"/"}>{ChannelName}</Link>
                </h1>
                <h2 className='cursor-context-menu font-bold text-gray-400'>{ChannelCategory}</h2>
                <h3 className='cursor-context-menu font-bold text-gray-400'>{ChannelOwner}</h3>
            </div>
        </div>
    )
}

export default Card

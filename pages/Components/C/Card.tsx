import React from 'react'
import ImageBox from '../I/ImageBox'
import Link from 'next/link'
import { PiTelevisionFill } from 'react-icons/pi'

const Card = ({ data }: any) => {
    return (
        <div className='grid justify-items-center w-[286px] h-auto rounded-md overflow-hidden border-2 border-gray-200 shadow-md shadow-gray-300'>
            <div className='w-full h-[124px]'>
                <ImageBox SRC={data?.pic} ALT={data?.channelName} />
            </div>
            <div className="px-6 py-3">
                <h1 className='flex flex-wrap items-center text-2xl font-bold hover:text-[#405d9c] w-fit' title={data?.channelName}>
                    <b><PiTelevisionFill /></b>
                    <Link href={`/SubPages/live/${data?._id}`}>{data?.channelName}</Link>
                </h1>
                <h2 className='cursor-context-menu text-gray-400 text-justify'>{data?.channelDesc.slice(0, 70)}....</h2>
                <h3 className='cursor-context-menu font-bold text-gray-400'>{data?.country}</h3>
            </div>
        </div>
    )
}

export default Card

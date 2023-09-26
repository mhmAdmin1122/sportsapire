import Link from 'next/link'
import React from 'react'

const BreadCrumbs = ({ bredName, LinkTxt, url }: any) => {
    return (
        <div className='flex flex-wrap items-center justify-between px-2 py-4 border-l-[8px] border-[#ff59bf]'>
            <h2 className='text-2xl font-bold'>{bredName}</h2>
            <Link href={url} className='text-[#ff0000] font-bold hover:text-[#151244ce]'>{LinkTxt} &rarr;</Link>
        </div>
    )
}

export default BreadCrumbs

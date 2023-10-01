import React from 'react'
import Image from 'next/image'

const ImageBox = ({ALT, SRC}:any) => {
  return (
    <Image src={SRC} alt={ALT}  className='!w-full !h-full' width={120} height={120}/>
  )
}

export default ImageBox;

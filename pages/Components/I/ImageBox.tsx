import React from 'react'
import Image from 'next/image'

const ImageBox = ({ALT, SRC}:any) => {
  return (
    <Image src={SRC} alt={ALT}  className='!w-full !h-full'/>
  )
}

export default ImageBox;

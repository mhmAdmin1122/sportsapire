import Image from 'next/image'
import React from 'react'

const ImageBox = ({ SRC, ALT, clasExtra }: any) => {
  return (
    <Image src={SRC} alt={ALT} className={`w-full h-full ${clasExtra}`} />
  )
}

export default ImageBox

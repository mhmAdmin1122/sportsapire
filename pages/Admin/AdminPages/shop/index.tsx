import Head from 'next/head'
import React from 'react'
import ProductUploader from '../../AdminComponents/P/ProductUploader'

const index = () => {
    return (
        <>
            <Head>
                <title>E-commerce Product Uploader</title>
            </Head>
            <ProductUploader />
        </>
    )
}

export default index

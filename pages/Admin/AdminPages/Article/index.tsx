import ArticalUploader from '../../AdminComponents/A/ArticalUploader'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <title>Article Writer</title>
            </Head>
            <ArticalUploader />
        </>
    )
}

export default index

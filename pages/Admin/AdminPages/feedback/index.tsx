import Head from 'next/head'
import React from 'react'
import AdminLayout from '../../AdminComponents/L/AdminLayout'

const index = () => {
    return (
        <>
            <Head>
                <title>Feedback Read</title>
            </Head>
            <AdminLayout>
                <h1 className='text-4xl font-bold text-center mb-4'>feedback posted by clients</h1>
                <div className='flex flex-wrap gap-4 justify-center w-full'>
                    <div className='comment_readbox w-[330px] grid justify-center text-justify gap-4 bg-[#fff] px-6 py-4 rounded-md'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos reiciendis nulla error distinctio et.</p>
                    </div>
                    <div className='comment_readbox w-[330px] grid justify-center text-justify gap-4 bg-[#fff] px-6 py-4 rounded-md'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos reiciendis nulla error distinctio et.</p>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default index

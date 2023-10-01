import Head from 'next/head'
import React from 'react'
import ChannelUploader from '../../AdminComponents/C/ChannelUploader'
import AdminLayout from '../../AdminComponents/L/AdminLayout'

const index = () => {
  return (
    <>
      <Head>
        <title>Channel Uploader</title>
      </Head>
      <AdminLayout>
        <ChannelUploader />
      </AdminLayout>
    </>
  )
}

export default index;
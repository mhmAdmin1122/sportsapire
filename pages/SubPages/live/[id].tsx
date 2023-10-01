import Layout from '@/pages/Components/L/Layout';
import React from 'react'
import { mongooseConnection } from '@/lib/mongoose'
import { Channel } from '@/models/channel'
import ImageBox from '@/pages/Components/I/ImageBox';
import Head from 'next/head';

const PlayerBox = ({ channel }: any) => {
  return (
    <>
      <Head>
        <title>{channel?.channelName} Live</title>
      </Head>
      <Layout>
        <div className='px-14 py-12'>
          <iframe src={`${channel?.url}`} scrolling='no' allowFullScreen className='w-[800px] h-[500px] rounded-md overflow-hidden' />
          <div className='flex flex-wrap items-center gap-2'>
            <div className='w-[100px] h-[100px] m-4 shadow-md shadow-gray-400 overflow-hidden rounded-full border-dashed border-gray-300 border-2'>
              <ImageBox SRC={channel?.pic} />
            </div>
            <div>
              <h1 className='cursor-pointer'>{channel?.channelName}</h1>
              <h3 className='cursor-context-menu font-bold text-gray-400'>{channel?.country}</h3>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PlayerBox;

export async function getServerSideProps(context: any) {
  await mongooseConnection();
  const { id } = context.query
  const channel = await Channel.findById(id)
  return {
    props: {
      channel: JSON.parse(JSON.stringify(channel))
    }
  }
}


import Layout from '@/pages/Components/L/Layout';
import React, { useEffect, useState } from 'react'
import { mongooseConnection } from '@/lib/mongoose'
import { Channel } from '@/models/channel'
import ImageBox from '@/pages/Components/I/ImageBox';
import Head from 'next/head';
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { MdShare, MdBookmarkAdd } from 'react-icons/md'
import axios from 'axios';
import Link from 'next/link'

const PlayerBox = ({ channel }: any) => {
  const [channelCardData, setChannelCardData] = useState<string | Boolean | Number | null | never | object | any>([]);
  const keyRotation: string = channelCardData?._id;
  useEffect(() => {
    axios.get('/api/channel').then(res => {
      setChannelCardData(res.data)
    })
  }, []);
  return (
    <>
      <Head>
        <title>{channel?.channelName} Live</title>
      </Head>
      <Layout>
        <div className='px-14 py-12 flex flex-wrap items-start justify-between'>
          <div className='mainbox w-[64%]'>
            <iframe src={`${channel?.url}`} scrolling='no' allowFullScreen className='w-[800px] h-[500px] rounded-md overflow-hidden' />
            <div className='flex flex-wrap items-center justify-between pr-2'>

              <div className='flex flex-wrap items-center gap-2'>
                <div className='w-[100px] h-[100px] m-4 shadow-md shadow-gray-400 overflow-hidden rounded-full border-dashed border-gray-300 border-2'>
                  <ImageBox SRC={channel?.pic} />
                </div>
                <div>
                  <h1 className='cursor-pointer'>{channel?.channelName}</h1>
                  <h3 className='cursor-context-menu font-bold text-gray-400'>{channel?.country}</h3>
                </div>
              </div>

              <div className="functionalIcon flex flex-wrap items-center justify-center gap-5 text-4xl">
                <b className="like">
                  <AiFillLike />
                </b>
                <b className='dislike'>
                  <AiFillDislike />
                </b>
                <b className='share'>
                  <MdShare />
                </b>
                <b className='fav'>
                  <MdBookmarkAdd />
                </b>
              </div>

            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 px-3 py-8 w-[36%]">
            <h1 className='w-[180px] h-[140px] flex text-center justify-center items-center bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-md text-2xl font-bold cursor-context-menu text-[#fff]'>Watch Live More</h1>
            {channelCardData.map((channelCardData: any) => (
              <div key={keyRotation + 1} className='flex flex-wrap'>
                <div className='w-[180px] h-[140px]'>
                  <ImageBox SRC={channelCardData?.pic} ALT={channelCardData?.channelName} />
                  <Link href={channelCardData?._id}>{channelCardData?.channelName}</Link>
                </div>
              </div>
            ))}
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


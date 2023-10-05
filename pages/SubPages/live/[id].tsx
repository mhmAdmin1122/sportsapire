/* eslint-disable react-hooks/exhaustive-deps */
import Layout from '@/pages/Components/L/Layout';
import { mongooseConnection } from '@/lib/mongoose'
import { Channel } from '@/models/channel'
import ImageBox from '@/pages/Components/I/ImageBox';
import Head from 'next/head';
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { MdShare, MdBookmarkAdd } from 'react-icons/md'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const PlayerBox = ({ channels }: any) => {
  const [channelCardData, setChannelCardData] = useState<string | Boolean | Number | null | never | object | any>([]);
  useEffect(() => {
    axios.get('/api/channel').then(res => {
      const data: any = res.data;
      setChannelCardData(data)
    })
  }, []);

  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <>
      <Head>
        <title>{channels?.channelName} Live</title>
      </Head>
      <Layout>
        <div className='playerbox_player w-full px-14 py-12 flex flex-wrap items-start justify-between'>
          <div className='mainbox w-[64%]'>
            <div className='bg-blue-600 text-white px-4 py-3 text-center w-fit rounded-md'>
              <h1 className='bg-gray-900 rounded-md px-4 py-2'>For enjoying without ads install adblocker{"( Adgaurd Adblocker )"} free</h1>
              <br />
              <Link href="https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg" target='blank' className='bg-green-900 px-4 py-2 rounded-md'>Download for Deaktop, Tab, and Laptops</Link>
              <br />
              <br />
              <Link href="https://adguard.com/en/adguard-android/overview.html" target='blank' className='bg-red-900 px-4 py-2 rounded-md'>Download for Mobile</Link>
            </div>
            <iframe
              src={`${channels?.url}`}
              scrolling='no'
              allowFullScreen
              allow='autoplay'
              className='w-[100%] h-[500px] rounded-md overflow-hidden' />
            <div className='flex flex-wrap items-center justify-between pr-2'>

              <div className='flex flex-wrap items-center gap-2'>
                <div className='channelframe_logo w-[100px] h-[100px] m-4 shadow-md shadow-gray-400 overflow-hidden rounded-full border-dashed border-gray-300 border-2'>
                  <ImageBox SRC={channels?.pic} />
                </div>
                <div>
                  <h1 className='cursor-pointer'>{channels?.channelName}</h1>
                  <h3 className='cursor-context-menu font-bold text-gray-400'>{channels?.country}</h3>
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
          <div className="morechannelsidPage flex flex-wrap items-center justify-center gap-8 px-3 py-8 w-[36%]">
            <h1 className='w-[180px] h-[140px] flex text-center justify-center items-center bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-md text-2xl font-bold cursor-context-menu text-[#fff]'>Watch Live More</h1>
            {channelCardData?.map((channelCardData: any) => (
              <div key={0} className='flex flex-wrap'>
                <div className='morechannelPic w-[180px] h-[140px]'>
                  <ImageBox SRC={channelCardData?.pic} ALT={channels?.channelName} />
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
  const channels = await Channel.findById(id)
  return {
    props: {
      channels: JSON.parse(JSON.stringify(channels))
    }
  }
}


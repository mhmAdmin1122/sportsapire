import Card from '@/pages/Components/C/Card'
import Layout from '@/pages/Components/L/Layout'
import ptv from '@/public/img/ptv.jpeg'
import sky from '@/public/img/sky.jpeg'
import willo from '@/public/img/willo.png'
import starsport1 from '@/public/img/ssport1.jpeg'
import geosuper from '@/public/img/geosuper.jpg'
import asport from '@/public/img/asport.jpeg'
import supsport from '@/public/img/supsport.jpeg'
import sonysport3 from '@/public/img/sonysport3.jpeg'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Live = () => {
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
                <title>Live Channels</title>
                <meta name="description" content="View Live Cricket Online, Free, HD, at sportsppaire.com" />
            </Head>
            <Layout>
                <div className='px-12 py-12'>
                    <h1 className='text-4xl font-bold text-center'>Live Channels</h1>
                    <div className="flex flex-wrap items-center justify-center gap-8 px-4 py-12">
                        {channelCardData.map((channelCardData: string) => (
                            <Card data={channelCardData} key={keyRotation + 1}/>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Live;

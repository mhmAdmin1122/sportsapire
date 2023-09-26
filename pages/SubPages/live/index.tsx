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
import React from 'react'

const index = () => {
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
                        <Card ChannelName="PTV SPORT" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="Pakistan" SRC={ptv} />
                        <Card ChannelName="SKY SPORT" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="United Kingdom" SRC={sky} />
                        <Card ChannelName="WILLOW HD" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="India" SRC={willo} />
                        <Card ChannelName="STAR SPORT 1" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="India" SRC={starsport1} />
                        <Card ChannelName="A-Sport HD" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="Pakistan" SRC={asport} />
                        <Card ChannelName="Super Sport" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="South African" SRC={supsport} />
                        <Card ChannelName="Geo Super" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="Pakistan" SRC={geosuper} />
                        <Card ChannelName="Sony Ten 3 HD" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="India" SRC={sonysport3} />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default index

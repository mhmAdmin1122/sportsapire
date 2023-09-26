import React from 'react'
import Card from './Card';
import ptv from '@/public/img/ptv.jpeg'
import sky from '@/public/img/sky.jpeg'
import willo from '@/public/img/willo.png'
import BreadCrumbs from '../B/BreadCrumbs';

const ChannelList = () => {
    return (
        <div className='px-12 py-12'>
            <BreadCrumbs bredName="Live Channel" LinkTxt="See ALL"/>
            <div className='flex flex-wrap items-center justify-center gap-8 px-4 py-12'>
                <Card ChannelName="PTV SPORT" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="Pakistan" SRC={ptv} />
                <Card ChannelName="SKY SPORT" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="United Kingdom" SRC={sky} />
                <Card ChannelName="WILLOW HD" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="Pakistan" SRC={willo} />
            </div>
        </div>
    )
}

export default ChannelList;

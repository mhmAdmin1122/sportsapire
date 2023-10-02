import React, { useEffect, useState } from 'react'
import Card from './Card';
import ptv from '@/public/img/ptv.jpeg'
import sky from '@/public/img/sky.jpeg'
import willo from '@/public/img/willo.png'
import axios from 'axios';

const ChannelList = () => {
    const [channelCardData, setChannelCardData] = useState<string | Boolean | Number | null | never | object | any>([]);
    const keyRotation: string = channelCardData?._id;
    useEffect(() => {
        axios.get('/api/channel').then(res => {
            const data:any = res.data
            setChannelCardData(data)
        })
    }, []);
    return (

        <div className='flex flex-wrap items-center justify-center gap-8 px-4 py-12'>
            {channelCardData.map((channelCardData: string) => (
                <Card data={channelCardData} key={keyRotation + 1} />
            ))}

            {/* <Card ChannelName="PTV SPORT" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="Pakistan" SRC={ptv} />
            <Card ChannelName="SKY SPORT" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="United Kingdom" SRC={sky} />
            <Card ChannelName="WILLOW HD" ChannelCategory="Cricket, FootBall, Volyball, Tennis, etc.." ChannelOwner="Pakistan" SRC={willo} /> */}
        </div>
    )
}

export default ChannelList;

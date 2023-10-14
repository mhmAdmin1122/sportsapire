import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const CommentViewer = () => {
    const [commentCardData, setCommentCardData] = useState<string | Boolean | Number | null | never | object | any>([]);
    const keyRotation: string = commentCardData?._id;
    useEffect(() => {
        axios.get('/api/comment').then(res => {
            setCommentCardData(res.data)
        })
    }, []);
    return (
        <div className="grid items-center justify-center gap-8 px-4 py-12">
            {commentCardData.map((commentCardData: any) => (
                <div  key={keyRotation + 1} className='bg-gray-300 px-8 py-6 rounded-lg text-base font-semibold'>
                    <h1>{commentCardData?.comment}</h1>
                </div>
            ))}
        </div>
    )
}

export default CommentViewer

import axios from 'axios'
import React, { useState } from 'react'
import { HiPaperAirplane } from 'react-icons/hi2'

const CommentWriter = () => {
    const [comment, setComment] = useState('')
    async function commentUploader(ev: any) {
        ev.preventDefault()
        const data = { comment }
        const response: any = await axios.post('/api/comment', data);
        if (response.ok) {
            alert('Form submission failed.');
        } else {
            setComment('')
        }

    }
    
    return (
        <form className='commentwriterform flex items-center justify-center border-[2px] mt-2 border-gray-200 w-fit rounded-md' onSubmit={commentUploader}>
            <input type="text" placeholder='Comment Now...' value={comment} onChange={ev => setComment(ev.target.value)} />
            <button type='submit' className='bg-green-700 text-[#fff] h-[45px] text-2xl'><HiPaperAirplane /></button>
        </form>
    )
}

export default CommentWriter

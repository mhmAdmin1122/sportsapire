import axios from 'axios'
import React, { useState } from 'react'

const FeedBack = () => {
    const [message, setMessage] = useState('')

    async function feedback(ev: any) {
        ev.preventDefault()
        const data = { message }
        const response: any = await axios.post('/api/feedback', data);
        if (response.ok) {
            alert('Form submission failed.');
        } else {
            setMessage('')
        }

    }

    return (
        <form className='grid justify-center gap-3 items-center bg-[#000000] px-8 py-4 rounded-lg w-fit' onSubmit={feedback}>

            <h1 className='text-2xl font-bold text-center w-full text-[#fff]'>Feedback</h1>

            <label htmlFor="">Feedback: </label>
            <textarea rows={5} cols={5} placeholder='Message' value={message} onChange={ev => setMessage(ev.target.value)} />

            <div className='flex flex-wrap justify-center'>
                <button type='submit' className='bg-green-500 text-lg font-semibold text-[#ececec]'>Submit</button>
            </div>

        </form>
    )
}

export default FeedBack

import axios from 'axios'
import React, { useState } from 'react'

const Problems = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    async function problem(ev: any) {
        ev.preventDefault()
        const data = { email, message }
        const response: any = await axios.post('/api/problem', data);
        if (response.ok) {
            alert('Form submission failed.');
        } else {
            setEmail('')
            setMessage('')
        }

    }
    return (
        <form className='grid justify-center gap-3 items-center bg-[#000000] px-8 py-4 rounded-lg w-fit' onSubmit={problem}>
            <h1 className='text-2xl font-bold text-center w-full text-[#fff]'>Describe Your Problems</h1>
            <label htmlFor="">Email: </label>
            <input type="email" placeholder='example@xyz.com' value={email} onChange={ev => setEmail(ev.target.value)} />
            <label htmlFor="">Message: </label>
            <textarea rows={5} cols={5} placeholder='Message' value={message} onChange={ev => setMessage(ev.target.value)} />
            <div className='flex flex-wrap justify-center'>
                <button type='submit' className='bg-green-500 text-lg font-semibold text-[#ececec]'>Submit</button>
            </div>
        </form>
    )
}

export default Problems

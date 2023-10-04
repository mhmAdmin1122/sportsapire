import axios from 'axios'
import React, { useState } from 'react'

const ContactUs = () => {
    const [fname, setFname] = useState('')
    const [email, setEmail] = useState('')
    const [pnumb, setPnumb] = useState('')
    const [message, setMessage] = useState('')

    async function contact(ev: any) {
        ev.preventDefault()
        const data = { fname, email, pnumb, message }
        const response: any = await axios.post('/api/contact', data);
        if (response.ok) {
            alert('Form submission failed.');
        } else {
            setFname('')
            setEmail('')
            setPnumb('')
            setMessage('')
        }

    }

    return (
        <form className='grid justify-center gap-3 items-center bg-[#000000] px-8 py-4 rounded-lg w-fit' onSubmit={contact}>

            <h1 className='text-2xl font-bold text-center w-full text-[#fff]'>Contact Us</h1>

            <label htmlFor="">Full Name: </label>
            <input type="text" placeholder='Jhon Doe' value={fname} onChange={ev => setFname(ev.target.value)} />

            <label htmlFor="">Email: </label>
            <input type="email" placeholder='example@xyz.com' value={email} onChange={ev => setEmail(ev.target.value)}  />

            <label htmlFor="">Mobile: </label>
            <input type="tel" placeholder='+1-000-0000-00' value={pnumb} onChange={ev => setPnumb(ev.target.value)}  />

            <label htmlFor="">Message: </label>
            <textarea rows={5} cols={5} placeholder='Message' value={message} onChange={ev => setMessage(ev.target.value)}  />

            <div className='flex flex-wrap justify-center'>
                <button type='submit' className='bg-green-500 text-lg font-semibold text-[#ececec]'>Submit</button>
            </div>

        </form>
    )
}

export default ContactUs

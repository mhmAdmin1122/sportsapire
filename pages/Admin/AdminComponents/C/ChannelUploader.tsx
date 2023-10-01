import axios from 'axios'
import React, { useState } from 'react'

const ChannelUploader = () => {
  const [channelName, setChannelName] = useState('')
  const [channelDesc, setChannelDesc] = useState('')
  const [country, setCountry] = useState('')
  const [url, setUrl] = useState('')
  const [pic, setPic] = useState(null)

  // image datbase reader url-generator
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const reader: any = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPic(reader.result);
    }
    reader.onerror = (error: any) => {
      console.log('Error', error)
    }
  };
  async function channel(ev:any) {
    ev.preventDefault()
    const data = { channelName, channelDesc, pic, country, url }
    const response:any = await axios.post('/api/channel', data);
    console.log(response)
    if (response.ok) {
      alert('Form submission failed.');
    } else {
      setChannelDesc('')
      setChannelName('')
      setPic(null)
      setCountry('')
      setUrl('')
    }

  }
  return (
    <form className='grid w-fit bg-blue-700 px-14 py-6 rounded-md' onSubmit={channel}>
      <h1 className='text-4xl justify-center font-bold text-center flex flex-wrap cursor-context-menu text-[#fff]'>Channel Uploader</h1>
      <div className="cardDetail_Channel grid ">
        <label>Channel Name</label>
        <input type="text" value={channelName} onChange={ev => setChannelName(ev.target.value)} placeholder='Channel Name' />
        <label>Channel Description</label>
        <textarea rows={5} cols={5} value={channelDesc} onChange={ev => setChannelDesc(ev.target.value)} placeholder='Channel Description' />
        <label>Channel Country</label>
        <input type="text" value={country} onChange={ev => setCountry(ev.target.value)} placeholder='Channel Country' />
        <label>Channel Iframe Url</label>
        <input type="text" value={url} onChange={ev => setUrl(ev.target.value)} placeholder='URL' />
        <label>Channel Pic</label>
        <input type="file" onChange={handleFileChange} accept='.png, .jpg, .jpeg, .gif' />
      </div>
      <button type='submit' className='rounded-md my-3'>Submit</button>
    </form>
  )
}

export default ChannelUploader

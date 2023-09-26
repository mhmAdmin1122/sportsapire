import Head from "next/head";
import Layout from "./Components/L/Layout";
import Herobanner from "./Components/H/Herobanner";
import ChannelList from "./Components/C/ChannelList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sport Sapire</title>
        <meta name="description" content="Watch Live Sports on Sport Sapire" />
      </Head>
      <Layout>
        <Herobanner />
        <div className='px-12 py-12'>
          
          <ChannelList />
        </div>
      </Layout>
    </>
  )
}

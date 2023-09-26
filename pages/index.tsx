import Head from "next/head";
import Layout from "./Components/L/Layout";
import Herobanner from "./Components/H/Herobanner";
import ChannelList from "./Components/C/ChannelList";
import Link from "next/link";

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
          <div className='flex flex-wrap items-center justify-between px-2 py-4 border-l-[8px] border-[#ff59bf]'>
            <h2 className='text-2xl font-bold'>Live Channel</h2>
            <Link href="/SubPages/live" className='text-[#ff0000] font-bold hover:text-[#151244ce]'>See All &rarr;</Link>
          </div>
          <ChannelList />
        </div>
      </Layout>
    </>
  )
}

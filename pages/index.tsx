import Head from "next/head";
import Layout from "./Components/L/Layout";
import Herobanner from "./Components/H/Herobanner";
import ChannelList from "./Components/C/ChannelList";
import BreadCrumbs from "./Components/B/BreadCrumbs";

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
          <BreadCrumbs bredName="Live Channel" LinkTxt="See ALL" url="/SubPages/live" />
          <ChannelList />
        </div>
      </Layout>
    </>
  )
}

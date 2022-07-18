import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-50 h-screen overflow-scroll scrollbar-hide">
      <Head>
        <title>Instagram Cloning</title>
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

export default Home

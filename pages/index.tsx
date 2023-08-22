import type { NextPage } from 'next'
import Head from 'next/head'
import Test from "../components/test"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Next.js + TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Test />
    </div>
  )
}

export default Home
import Head from 'next/head'
import Image from 'next/image'
import Landing from '../components/front'
import Pricing from '../components/pricing'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Jack Stanley Tutoring</title>
        <meta name="description" content="Tutoring by Jack Stanley" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}

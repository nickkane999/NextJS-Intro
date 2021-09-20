import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Listings | Home</title>
        <meta name="keywords" content="listings" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Sample content</p>
        <p className={styles.text}>Sample content</p>
        <p className={styles.text}>Sample content</p>
        <Link href="/listings">
          <a className={styles.btn}> See Listings</a>
        </Link>
      </div>
    </>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Decsto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Welcome to Decsto Coming Soon!" />
        <p className="description">
          Decentralized Storage for storing you data safe, secure, reliable, redudant
        </p>
      </main>

      <Footer />
    </div>
  )
}

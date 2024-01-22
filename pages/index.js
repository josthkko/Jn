import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>JN page is here!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The entire universe has been neatly divided into things to (a) mate with, (b) eat, (c) run away from, and (d) rocks." />
        <p className="description">
          Terry Pratchett
        </p>
      </main>
    </div>
  )
}

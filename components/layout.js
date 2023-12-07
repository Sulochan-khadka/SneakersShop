import Head from 'next/head'
import Header from '../components/Header'

export default function Layout({ children }) {
  return (
    <div className="page">
      <Head>
        <title>SneakerSearch</title>
        <meta name="description" content="Compra los mejores sneakers" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="main">
        {children}
      </main>
    </div>
  )
}

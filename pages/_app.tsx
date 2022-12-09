import type { AppProps } from 'next/app'
import Head from 'next/head'
import Box from '~/primitive/Box'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>e-commerce NSCPB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Box flex css={{ margin: '0 20%', paddingVertical: '$10', }}>
        <Component {...pageProps} />
      </Box>

      <Footer />
    </>)
}

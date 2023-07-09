import React from 'react';
import '../styles/globals.css'
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return ( 
    <>
        <Head>
            <title>Pro-Recommend</title>
        </Head>
        <Component {...pageProps} />
    </>
  )
}
import Head from 'next/head';
import Layout from "../components/Layout";
//import Image from 'next/image';
//import cakeImg from '../public/cake.png';
import '../styles/globals.scss';
import { SessionProvider } from 'next-auth/react';

function MyApp ({ Component, 
    pageProps: { session, ...pageProps }
}){ 
    return <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <SessionProvider session={session}>
    <Layout>
    <main>
    <Component {...pageProps} />
    </main>
    </Layout>
    </SessionProvider>
    </>
}
   export default MyApp;
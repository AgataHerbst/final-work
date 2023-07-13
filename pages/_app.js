import Head from 'next/head';
import Layout from "../components/Layout";
//import Image from 'next/image';
//import cakeImg from '../public/cake.png';
import '../styles/globals.scss';

function MyApp ({ Component, pageProps}){ 
    return <>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <Layout>
        <main>
    <Component {...pageProps} />
    </main>
    </Layout>
    </>
}
   export default MyApp;
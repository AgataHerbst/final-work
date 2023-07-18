//import '../styles/global.css';
import Head from 'next/head';
import Layout from "../components/Layout";
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import {useEffect} from 'react';

function MyApp ({ Component, 
    pageProps: { session, ...pageProps }
}){ 
    console.log(Component.auth)
    return <>
    <Head>
   
    </Head>
    <SessionProvider session={session}>
    <Layout>
    <main>
   {Component.auth ? ( 
    <Auth>
    <Component {...pageProps} />
    </Auth>
    ) : (
        <Component {...pageProps} />
    )
    }
    </main>
    </Layout>
    </SessionProvider>
    </>
}
   export default MyApp;

   function Auth ({ children }){
    const router = useRouter ()
    const {data: session, status} = useSession()
    const isUser = !!session?.user
    const loading = status === 'loading'

useEffect(() => {
    if(!loading) {
        if(!isUser) {
            router.push('/api/auth/signin')
        }
    }
}, [isUser, loading])

if(loading) {
    return <h3>Loading...</h3>
}

if(!loading && isUser) {
    
    return <>{children}</>
}
return null
   
   }
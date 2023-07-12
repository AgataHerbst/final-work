import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Heading from '../components/Heading';

function Error() {
  const router = useRouter();

useEffect(() => {  //при ошибке через 3 секунды перебросит на страницу home
setTimeout(() => {
  router.push('/')
}, 3000);
  }, [])

  return <>
  <Head>
    <title>Error</title>
  </Head>
    <Heading text="404" />
    <Heading tag="h2" text="Something is going wrong..." />
  </>
}

export default Error;
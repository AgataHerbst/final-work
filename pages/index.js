import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from "next/link";
import SignInForm  from '../components/SignInForm';

 function Home  () {
  const { data, status } = useSession();
  return (
    <>
  
    <Head>
      <title>Home</title>
    </Head>
    <main>
    <div className={styles.wrapper}>
    <Heading text="Iris Backer" />
    <h3>Status: {status}</h3>
    <Link href='api/auth/signin'>go to signin</Link>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    {data && <button onClick={signOut}>Sign out</button>}
    {!data && (
    <button onClick={() => signIn('google')}>
      Sign in
      </button>
      )}
   {!data && <SignInForm />}
    </div>
    </main>
    </>
);
  }
export default Home;
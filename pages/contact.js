import Head from 'next/head';
import Heading from "../components/Heading";
import { signIn, signOut, useSession } from 'next-auth/react';
import SignInForm from '../components/SignInForm';

function Contact() {
    const { data, status } = useSession();
    return <>
        <Head>
            <title>Contact</title>
        </Head>
        <Heading text="Contact:" />
        <h2>Status: {status}</h2>

        <pre>{JSON.stringify(data, null, 2)}</pre>
        {data && <button onClick={signOut}>Sign out</button>}
        {!data && (
            <button onClick={() => signIn('google')}>
                Sign in
            </button>
        )}
        {!data && <SignInForm />}
    </>
}

export default Contact
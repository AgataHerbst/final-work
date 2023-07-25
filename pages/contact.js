import Heading from "../components/Heading";
import { signIn, signOut, useSession } from 'next-auth/react';
import SignInForm from '../components/SignInForm';

function Contact() {
    const { data } = useSession();
    return <>
      <Heading text="Contact:" />
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
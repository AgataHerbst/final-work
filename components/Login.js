import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';


export default function Login() {
    const { data: session } = useSession();
    if (session)
        return <div>
            {session?.user?.image && <img src={session?.user?.image || ''} width="32" height="32" alt='avatar' />}
            <span><Link href='/profile' className='' title='Мой профиль'>{session?.user?.name}</Link></span>
            <button onClick={() => signOut()}>Выйти</button>
        </div>;
    return <div>
        <button onClick={() => signIn()}>Войти</button>
    </div>;
}
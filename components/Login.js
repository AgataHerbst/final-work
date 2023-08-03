import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { IconButton } from "@mui/material";

export default function Login() {
  
    const { data: session } = useSession();
    if (session)
        return <div>
            {session?.user?.image && <img src={session?.user?.image || ''} width="32" height="32" alt='avatar' />}
            <span>
                <Link href='/profile'
                 className='' 
                 title='Мой профиль'
                  >{session?.user?.name}</Link>
                 </span>
            <IconButton onClick={() => signOut()}>Выйти</IconButton>
        </div>;
    return <div>
        <IconButton onClick={() => signIn()}>Войти</IconButton>
    </div>;
}
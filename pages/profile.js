import { useSession, signIn, signOut } from 'next-auth/react'; //хук useSession и функции входа и выхода
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next";
//import { IconButton } from '@mui/material';


export default function Component (){
    const { data: session } = useSession ();

if (session) {
    return (
        <>
        Вы вошли, как: {session.user?.email} <br /> 
        {session?.user?.image && <img src={session.user.image} alt='avatar' />}
         {session?.user?.name} <br />
        <button onClick={() =>signOut()}>Выйти</button>
        </>
    )
}
return (
    <>
    Не авторизован! <br />
    <button onClick={() => signIn()}>Войти</button>
    </>
)
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
if (!session){
    return {
        redirect: {
            destination: '/api/auth/signin',
            permanent: false, 
    }
}
}
    return {
    props: {
    session,
    },
}
}
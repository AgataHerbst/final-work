import { useSession, signIn, signOut } from 'next-auth/react'; //хук useSession и функции входа и выхода
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next";
import s from '../styles/Profile.module.css';
import { Button, Container } from "@mui/material";
import Footer from '../components/Footer';



export default function Component (){
    const { data: session } = useSession ();

if (session) {
    return (
        <>
        <Container
        sx={{
        mt: '2rem'}}
        >
        <h1 className={s.h1}>Вы вошли, как:</h1> {session.user.email} <br /> 
        <img src={session.user.image} width={200} height={200} alt='avatar' /> <br />
        <h3>{session?.user?.name}</h3> <br />
        <Button variant="contained" onClick={() =>signOut()}>Выйти</Button>
        </Container>
        <Footer />
        </>
    )
   
}
return (
    <>
    Не авторизован! <br />
    <Button variant="contained" onClick={() => signIn()}>Войти</Button>
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
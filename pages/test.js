import {getServerSession} from 'next-auth/next';
import {authOptions} from './api/auth/[...nextauth]';

function TestPage({user}) {
  return <div>TestPage
    <pre>{JSON.stringify(user, null, 2)}</pre>
  </div>
  
}
/** 
*@param {import('next').getServerSidePropsContext} ctx
*/
export async function getServerSideProps(ctx) {
    const session = await getServerSession(ctx.req, ctx.res, authOptions)
    
    if (!session) {
return {
    redirect: '/api/auth/signin',
    permanent: false
}
    }
    
    return {
        props: {
         user: session.user 
        }
    }
}

export default TestPage
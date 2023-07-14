import { useSession } from 'next-auth/react';

//import {getServerAuthSession} from './api/auth/[...nextauth]'

function TestPage() {
  const {data, status} = useSession()

  /*if(status === 'loading') {
    return <h3>loading...</h3>
  }
  if(status === 'unauthenticated') {
return <h3>{status}</h3>
  }*/
  
  return (
  <div>TestPage
    <pre>{JSON.stringify(data.user, null, 2)}</pre>
  </div>
  )
}

TestPage.auth = true
// /** 
// *@param {import('next').getServerSidePropsContext} ctx
// */
//export async function getServerSideProps(ctx) {
   //const session = await getServerAuthSession (ctx.req, ctx.res)
  
   // if (!session) {
//return {
    //redirect: {
    //  destination:'/',
    //permanent: false,
  //}
//}
   // }
    
   // return {
      //  props: {
       //  user: session.user 
       // }
   // }
//}

export default TestPage
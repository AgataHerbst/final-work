import { signIn } from 'next-auth/react';
import {useState} from 'react';

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignin (e) {
e.preventDefault()
signIn('credentials', { email, password, callbackUrl: '/test' })
    }
  
  return (
<form onSubmit={handleSignin}>
    <input type="text" 
    value={email} 
    onChange={e => setEmail(e.target.value)}
     />
     <br />
      <input type="text" 
    value={password} 
    onChange={e => setPassword(e.target.value)}
     />
     <br />
     <button type='submit'>Login</button>
  </form>
  )
  
}

export default SignInForm;
import React, { useState } from 'react'
import './Login.css'
import SignUpScreen from './SignUpScreen';

function Login() {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className='login'>
        <div className="login__background">
            <img
            className='login__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />

            <button onClick={()=>setSignIn(true)} className='login__signin'>Sign In</button>
            <div className="login__gradient"></div>
        </div>
        
        <div className="login__body">
            {signIn? (<SignUpScreen/>):
            (
                <>
             <h1 >Unlimited Films, TV Programmes and More</h1>
             <h2>Watch Anywhere. Cancel at Any Time</h2>
             <h3>Ready to watch? Enter Email to create or restart your membership</h3>
             <div className="login__input">
                 <form>
                     <input type="email" placeholder='Email Address' />
                     <button onClick={()=>setSignIn(true)} className='login__getStarted'>GET STARTED</button>
                 </form>
             </div>
            </>
            )
            }
            
        </div>
    </div>
  )
}

export default Login
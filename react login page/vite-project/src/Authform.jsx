import React, { useState } from 'react'
const Authform = () => {
   const [isLogin, setIsLogin] = useState(true)

  return (
    <div className='container'>
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>signup</button>
        </div>
         {isLogin ? <>
          <div className="form">
            <h2>Login</h2>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <a href="#">Forgot Password?</a>
            <button>Login</button>
            <p>Not a member? <a href="#" onClick={() => setIsLogin(false)}>Sign up</a></p>
          </div>
         </> : <>
         <div className="form">
           <h2>Sign Up</h2>
           <input type="email" placeholder='Email'/>
           <input type="password" placeholder='Password'/>
           <button>Sign Up</button>
           <p>Already a member? <a href="#" onClick={() => setIsLogin(true)}>Login</a></p>
         </div>
         </>}
      </div>
    </div>
  )
}

export default Authform

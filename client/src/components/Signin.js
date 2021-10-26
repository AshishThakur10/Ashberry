import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Signin = () => {
    return (
        <Body><div className='login_container'>



<div className='wp'>  <h><br/>ashberry<br/></h>

<r><br/><br/>Welcome to ashberry<br/><br/></r>
<m><br/><br/>-here u can make your friends  with here highly complatabal <br/>
-meet with same  nature parter as your nature<br/></m></div><br/><br/><br/><br/>

<div className='login__containers'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' />
                    <h5>Password</h5>
                    <input type='password' />
                    <button type='submit' className='login__signInButton'>Log In</button>
                </form>

                <p>
                    Forgot Password
                </p>

                <Link  className='login__registerButton' to="/signup" role ="button">Create your ashberry Account</Link>
            </div>
        </div>





        </Body>
      

    )
}

const Body = styled.nav`


   background-image: url("https://webgradients.com/public/webgradients_png/002%20Night%20Fade.png"); 
   height:1321px;width:1349px;

h{
    font-size:54px;
    color:rgba(223,87,87,255);
}
r{
    color:white;
    font-size:42px;
}


.login_container{
    max-width: 1104px;
    

    display:flex;
    
   
    margin:0 auto;
    
}
.login__containers > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 100%;
  }
  .login__containers > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

.login__containers > form > h5 {
    margin-bottom: 5px;
}
.login__containers {
    width: 360px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
    background-color: rgb(106, 108, 109);
    margin-left: 314px;
    margin-top: 60px;
}
.login__signInButton {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
  }

  .login__registerButton{
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
    background:white;
    display: flex;
    align-items: center;
    padding-left:45px;
    
  }


.wp{
    // display:flex;
margin-right:24px;
max-width: 500px;
}
`

export default Signin

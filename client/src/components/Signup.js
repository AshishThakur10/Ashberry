// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// const Signup = (props) => {
//   const [credentials, setcredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     cpassword: "",
//   });
//   let history = useHistory();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = credentials;
//     const response = await fetch("http://localhost:5000/api/auth/createuser", {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password }),
//     });
//     const json = await response.json();
//     console.log(json);
//     if (json.success) {
//       //save the auth token and redirect
//       localStorage.setItem("token", json.authtoken);
//       history.push("/");
//       props.showAlert("Account Created Successfully", "success");
//     } else {
//       props.showAlert("Invalid Credentials", "danger");
//     }
//   };
//   const onChange = (e) => {
//     setcredentials({ ...credentials, [e.target.name]: e.target.value });
//   };
//   return (
//     <div className="container">
//       <h2>Create an account to use iNotebook</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             onChange={onChange}
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             onChange={onChange}
//             aria-describedby="emailHelp"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             onChange={onChange}
//             minLength={5}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="cpassword" className="form-label">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="cpassword"
//             name="cpassword"
//             onChange={onChange}
//             minLength={5}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'


const Signup = (props) => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:4000/api/auth/createuser", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
    
    } else {
        alert("Invalid Credentials");
    }
  };
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
    return (
        <Body><div className='login_container'>



<div className='wp'>  

<div className='login__containers'>
                <h1>Create an account to use iNotebook</h1>

                <form onSubmit={handleSubmit}>
                <h5>Name</h5>
                    <input type='text' id='name' name='name' onChange={onChange} />



                    <h5>E-mail</h5>
                    <input type='email' id='email' name='email'  onChange={onChange} />
                    <h5>Password</h5>
                    <input type='password' id='password' name='password'  onChange={onChange} minLength={5} />
                    <h5>Confirm Password</h5>
                    <input type='password' id='cpassword' name='cpassword'  onChange={onChange}  minLength={5}/>
                    <button type='submit' className='login__signInButton'>Submit</button>
                </form>

             

            </div>
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
    height: 23px;
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

export default Signup

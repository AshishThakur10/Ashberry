import React from 'react'
import styled from "styled-components";



const Profile = () => {
    return (
        <Body>
            
        <l class="fas fa-user-circle"  ><h1>User name</h1><h1>Edit Profile</h1><br/><h2>0 post</h2> <h2>0 followers</h2><h2>10 friends</h2>  </l>
       
      <hr/>
      <h3>Posts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  About  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tag &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Photo</h3>
      <p class="fas fa-image"></p> <p class="fas fa-image"></p><p class="fas fa-image"></p><br/> <p class="fas fa-image"></p> <p class="fas fa-image"></p> <p class="fas fa-image"></p> <br/>  <p class="fas fa-image"></p> <p class="fas fa-image"></p><p class="fas fa-image"></p>
      <h4>about   help    API    Language    Teams</h4>
        </Body>
    )
};
const Body =styled.main`
l{ font-size:921%;
    padding-left: 73px;
    padding-top: 34px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    cursor: pointer;
}
h1{
 
  
    padding-left: 4px;
   
    font-size:25px;
}
h2{
    font-size:25px;
  
    padding-left: 310px;
    
    
}
h3{
    font-size:35px;
    display: grid;
    grid-template-columns: repeat(1,4fr);
 
    margin-left: 90px;
}
p{
    font-size: 130px;
    color: rgba(247,131,172,255);
   
   margin:2px;
   padding-left:84px;
   cursor: pointer;
  
}
h4{
    margin-left:42%
  }



`




export default Profile

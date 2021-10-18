import React from 'react'
import styled from "styled-components";


const Friends = () => {
    return (
       <Body>
             <h1>friends request</h1> 
             <br/>
            <h1>friend suggestion</h1>
            <p class="fas fa-image"></p> <s class="fas fa-star"></s> <s class="fas fa-star"></s> <s class="fas fa-star"></s> <p class="fas fa-image"></p><s class="fas fa-star"></s> <s class="fas fa-star"></s> <p class="fas fa-image"></p><s class="fas fa-star"></s> <s class="fas fa-star"></s> <br/> <p class="fas fa-image"></p><s class="fas fa-star"></s> <s class="fas fa-star"></s>  <p class="fas fa-image"></p><s class="fas fa-star"></s> <s class="fas fa-star"></s>  <p class="fas fa-image"></p> <s class="fas fa-star"></s> <s class="fas fa-star"></s> <br/>  <p class="fas fa-image"></p><s class="fas fa-star"></s> <s class="fas fa-star"></s> <s class="fas fa-star"></s> <s class="fas fa-star"></s>  <p class="fas fa-image"></p><s class="fas fa-star"></s> <s class="fas fa-star"></s> <s class="fas fa-star"></s> <p class="fas fa-image"></p><s class="fas fa-star"></s> <s class="fas fa-star"></s> 
            <h4>about   help    API    Language    Teams</h4>
            </Body>
    )
}


const Body = styled.nav`
h1{
padding-left:34px;

font-size:25px;
}
      p{
        font-size: 150px;
        color: rgba(247,131,172,255);
       
       margin:14px;
       padding-left:94px;
       cursor: pointer;
       }
       
       s{
        font-size: 15px;
        
       }
       h4{
        margin-left:42%
      }`
  
      
      ;
      
export default Friends

import styled from "styled-components";

import {Link} from "react-router-dom"


const Header = () => {
  return (
    <>
 
    <Nav>
    
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/#">              
          <Searchbar>
          <input type="text" id="filter-jobs" name="filter-jobs" placeholder="search" />
          <i class="far fa-search"></i>
          </Searchbar>
          <div className='navbar'>
          <r><Link to="/"  class="fas fa-home"></Link></r>
          <s><Link to="/login" class="fas fa-sign-in-alt"></Link></s>
          <j><Link to="/groups" class="fas fa-users"></Link></j>
          <b><Link to="/bell" class="fas fa-bell"></Link></b>
          <d><Link to="/ad" class="fas fa-ad" ></Link></d>
          <f><Link to="/friends"class="fas fa-user-friends"></Link></f>
          <u><Link to="/profile" class="fas fa-user" ></Link></u>         
         
          <e><Link to="/more" class="fas fa-ellipsis-h"></Link></e>
          
          </div>
          
          
        </a>
   
        
      </NavMenu>
      
      
    </Nav>
    <hr/>
    </>

  );
};

const Nav = styled.nav`

height:54px;
display:flax;
align-items:center;
padding:0 36px;


  
      `;
    
      const Searchbar = styled.nav`
      background-color: #b9adad;
      height: 30px;
      border-radius: 10px;
      border: 2px rgb(87, 82, 85);
      display: flex;
      margin-top: 15px;
      margin-left: 1.4%;
      overflow: hidden;
  }
  
      `;
const NavMenu = styled.div`     
    .navbar{
      
      display:flex;
     
    }
      

     
      

    a{
      display:flex;
      align-item:center;
     
      border:0;
      padding-left: 74px;
    

    input{
      
      background-color: transparent;
      outline: none;
      border: none;
      font-size: 15px;
     
      margin-left: 20px;}
    
    i{
      font-size:20px;
      color: rgba(130,201,30,255);
      cursor: pointer;
      padding-top:4px;
      padding-right:13px;
    }

    r{
      font-size:30px;
      cursor: pointer;
      padding-top:14px;
      margin-left:10px;
    }
    
    s{
      font-size:30px;
      cursor: pointer;
      padding-top:14px;
      margin-left:10px;
    }
    j{
      font-size: 30px;
      color: Green;
      cursor: pointer;
      padding-top:14px;
      margin:0px;
    }
    b{
      font-size: 30px;
      color: rgba(130,201,30,255)
      cursor: pointer;
      padding-top:14px;
      margin-left:0px;
    }
    d{
      font-size: 34px;
    
      color: #fd7e14;
      cursor: pointer;
      padding-top:14px;
      margin-left:0px;
    }
    f{
      font-size: 30px;
      
      cursor: pointer;
      padding-top:14px;
      margin-left:10px;
    }
    u{
      font-size: 27px;
      
      cursor: pointer;
      padding-top:14px;
     
    }
    e{
      font-size: 44px;
      color:blue
      cursor: pointer;
      padding-top:14px;
     
    }
  


  }
      `;




const Logo = styled.img`
width: 50px;
padding-top: 10px;



      `;


export default Header;






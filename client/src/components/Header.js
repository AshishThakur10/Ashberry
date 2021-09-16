import styled from "styled-components";



const Header = () => {
  return (
    <Nav>
      <Logo
        src="/images/logo.svg" />
     

      <NavMenu>
        <a>
          
        
          <Searchbar>
          <input type="text" id="filter-jobs" name="filter-jobs" placeholder="search" />
          <i class="far fa-search"></i>
          </Searchbar>
          <r class="fas fa-home"></r>
          


          <j class="fas fa-user-friends"></j> 
          <b class="fas fa-bell"></b>
          <d class="fas fa-ad"></d>
          <f class="fas fa-user-friends"></f>
          <u class="fas fa-user"></u>
         
          <e class="fas fa-ellipsis-h"></e>
          
        </a>
        
      </NavMenu>
      
      
    </Nav>
  

  );
};

const Nav = styled.nav`
height:54px;
display:flax;
align-items:center;
padding:0 36px;
  

hr{
 
}
  
      `;
     


      const Searchbar = styled.nav`
      background-color: #b9adad;
      height: 30px;
      border-radius: 10px;
      border: 2px rgb(87, 82, 85);
      display: flex;
      margin-top: 15px;
      overflow: hidden;
  }
  
      `;
const NavMenu = styled.div`     
      display:flex;

    a{
      display:flex;
      align-item:center;
     
      border:0;
      padding-left: 84px;
    

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
      margin-left:100px;
    }
    j{
      font-size: 30px;
      color: rgba(130,201,30,255);
      cursor: pointer;
      padding-top:14px;
      margin-left:60px;
    }
    b{
      font-size: 30px;
      color:#fd7e14;
      cursor: pointer;
      padding-top:14px;
      margin-left:60px;
    }
    d{
      font-size: 34px;
      color:#fd7e14;
      cursor: pointer;
      padding-top:14px;
      margin-left:60px;
    }
    f{
      font-size: 30px;
      
      cursor: pointer;
      padding-top:14px;
      margin-left:60px;
    }
    u{
      font-size: 27px;
      
      cursor: pointer;
      padding-top:14px;
      margin-left:60px;
    }
    e{
      font-size: 44px;
      
      cursor: pointer;
      padding-top:14px;
      margin-left:150px;
    }
  
    
  }
      `;


const Logo = styled.img`
width: 50px;
padding-top: 10px;



      `


export default Header;






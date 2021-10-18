import styled from "styled-components";


const Home = () => {
// eslint-disable-next-line
  return (
    <>
    
    <Container>
    
      <l class="fas fa-user-circle"></l>
      <v>
        <i class="fas fa-plus-square"></i>      
        <p class="fas fa-image"></p>
        <p class="fas fa-image"></p>
        <p class="fas fa-image"></p>      
        <hr width = "143%" />
        <r class="fas fa-user-circle"></r>
        <b class="fas fa-image"></b>
        <hr width = "143%" />
        <r class="fas fa-user-circle"></r>
        <b class="fas fa-image"></b>
        <hr width = "143%" />
        <r class="fas fa-user-circle"></r>
        <b class="fas fa-image"></b>
        <hr width = "143%" />
        <r class="fas fa-user-circle"></r>
        <b class="fas fa-image"></b>
        <h4>about   help    API    Language    Teams</h4>
        <hr width = "143%" />
        
      </v>
      
      <a>
      <i class="fas fa-user-friends"></i>
      <hr width = "124%"  />
      <p class="fas fa-user-circle"></p>
      <p class="fas fa-user-circle"></p>
      <p class="fas fa-user-circle"></p> <p class="fas fa-user-circle"></p>
      <p class="fas fa-user-circle"></p> <p class="fas fa-user-circle"></p>
      <p class="fas fa-user-circle"></p>
      <p class="fas fa-user-circle"></p>
      </a>
    </Container>
</>
  );
  


};
const Container = styled.main`
l{
  font-size:90px;
  cursor: pointer;
  
  
}


v{
  border-left: 1px solid;
  height: 2250px;
  position: absolute;
  left: 15%;
 
  top: 10%;

  h2{
   display:flex;
   margin-bottom:63px;
   padding-bottom:341px
  }
  h4{
    margin-left:42%
  }
 
  p{
    font-size: 100px;
    color: rgba(247,131,172,255)
    ;
   cursor: pointer;
   padding: 34px;
 
  }
  b{
    font-size: 400px;
    color: rgba(247,131,172,255);
    margin-left:40%;
  }
  r{
    font-size:34px;
    cursor: pointer;
    display:flex;
    margin-left:6px;
  }



  i{
    font-size: 150px;
    color: rgba(130,201,30,255);
    cursor: pointer;
    display:flex
    padding-top:14px;
    margin-left:24px;
  }}


   
a{
 border-left: 1px solid;
 height: 2250px;
  position: absolute;
  left: 85%;
 
  top: 10%;

 
p{
  font-size: 40px;
  cursor: pointer;
  display:flex;
  margin-left:6px;
  
}

i{
  font-size:80px;
  cursor: pointer;
 
  margin-left:60px;
}
}


`;



export default Home;

import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import  Header  from './components/Header';
import {
  BrowserRouter,
Route,Switch } from "react-router-dom";
import Friends from "./components/Friends";
import Bell from "./components/Bell";
import Ad from "./components/Ad"
import Groups from "./components/Groups";
import More from "./components/More";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
       <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/profile' component={Profile}/>         
          <Route path='/friends' component={Friends}/>
          <Route path='/ad' component={Ad}/>          
          <Route path='/bell' component={Bell}/>
          <Route path='/groups' component={Groups}/>
          <Route path='/more' component={More}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
        </BrowserRouter>

      {/* <Home Home={Home} />
      <Profile Profile={Profile} /> */}
    </>
  );
}

export default App;

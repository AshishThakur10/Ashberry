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
import More from "./components/More"
import Signup from "./components/Signup";
import NoteState from "./context/NoteState";
import Login from "./components/Login";

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Header/>
       <Switch>
          <Route path='/' component={Signup} exact/>
          <Route path='/profile' component={Profile}/>         
          <Route path='/friends' component={Friends}/>
          <Route path='/ad' component={Ad}/>          
          <Route path='/bell' component={Bell}/>
          <Route path='/groups' component={Groups}/>
          <Route path='/more' component={More}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/home' component={Home} exact/>
        </Switch>
        </BrowserRouter>
        </NoteState>

      {/* <Home Home={Home} />
      <Profile Profile={Profile} /> */}
    </>
  );
}

export default App;

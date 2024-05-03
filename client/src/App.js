import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import auth from "./components/auth";

function App() {
  
  const [ logInUser, setLogInUser ] = useState(null)

  return (
    <div className = "login-page">
      <h1>Welcome to the 2000s DEPOT!</h1>
      <img src={logo} alt="2000s DEPOTlogo" />
      <div
        className="login container">
          {!! logInUser ? <Outlet/> : <auth setUser={setLogInUser}/>}
      </div>
      <section 
        className= "About">
          <h2> A Peak Into The 2000s DEPOT?!</h2>
          <p>"Welcome to 2000s DEPOT, your ultimate destination for all things gaming 
            from the iconic era of the 2000s! Dive into discussions, debates, and 
            nostalgia-filled conversations about your favorite games, consoles, and moments 
            from this golden age of gaming. Whether you're reliving the classics or discovering hidden gems, 
            join our vibrant community of fellow gamers to reminisce, strategize, and share your passion for
            the games that defined a generation."</p>
      </section>
    </div>
  );
}

export default App;

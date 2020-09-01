import React from 'react';
import MenuLateral from './Components/MenuLateral';
import Home from './Pages/Home';
// import Contato from './Pages/Contato';
import VideoMO from './Components/Video';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <MenuLateral></MenuLateral>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" render={props => <Home{...props}/>}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

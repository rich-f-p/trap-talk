import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DecoyMessage from './pages/decoyLanding';
import Messages from './pages/Landing';
import CreateUserForm from './components/CreateAccountForm';
import Profile from './pages/Profile';
import FriendSearch from './pages/FriendSearchResults';
import PinForm from './components/PinForm';
import Navbar from './components/Navbar';
import './App.css';
import  LoginForm  from './components/LoginForm';


// import Login from './pages/Login';

function App() {
  return (
    <Router>
      <>
        
        <Switch>  
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/createAccount' component={CreateUserForm} />
          <Route exact path='/home' component={PinForm} />
          <Route exact path='/messages' component={Messages} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/search' component={FriendSearch} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

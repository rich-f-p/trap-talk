import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DecoyMessage from './pages/decoyLanding';
import Landing from './pages/Landing';
//import Login from './pages/Login';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import './App.css';
import  LoginForm  from './components/LoginForm';


// import Login from './pages/Login';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={DecoyMessage} />
          <Route exact path='/landing' component={Landing} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/profile' component={Profile} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;

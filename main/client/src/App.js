import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

// import Login from './pages/Login';

function App() {
  return (
    <div>
      <Navbar />


      <Router>
        <>
          <Switch>
            <Route exact path='/login' component={LoginForm} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>


    </div>
  );
}

export default App;

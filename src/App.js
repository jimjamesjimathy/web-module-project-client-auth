import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Login from './mocks/components/Login';
import FriendsList from './mocks/components/FriendsList';
import AddFriend from './mocks/components/AddFriend';
import Logout from './mocks/components/Logout';
import PrivateRoute from './mocks/components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h3>Friends!</h3>
        <Link to='/'>Login</Link>
        <Link to='/friends'>All Friends</Link>
        <Link to='/friends/add'>Add Friend</Link>
        <Link to='/logout'>Log out</Link>
      </header>
      <Route exact path='/' component={Login} />
      <Route exact path='login' component={Login}>
        <Redirect to='/' />
      </Route>
      <PrivateRoute exact path='/friends' component={FriendsList} />
      <PrivateRoute exact path='/friends/add' component={AddFriend} />
      <PrivateRoute exact path='/logout' component={Logout} />

    </div>
    </Router>
  );
}

export default App;

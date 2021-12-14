import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Login from './mocks/components/Login';
import FriendsList from './mocks/components/FriendsList';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h3>Friends!</h3>
        <Link to='/'>Login</Link>
        <Link to='/friends'>All Friends</Link>
        <Link to='/friends/add'>Add Friend</Link>
      </header>
      <Route exact path='/' component={Login} />
      <Route exact path='login' component={Login}>
        <Redirect to='/' />
      </Route>
      <Route exact path='/friends' component={FriendsList} />
      {/* <Route exact path='/friends/add' component={AddFriend} /> */}

    </div>
    </Router>
  );
}

export default App;

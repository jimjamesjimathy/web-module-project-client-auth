import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Login from './mocks/components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={Login} />
      <Route exact path='login' component={Login}>
        <Redirect to='/' />
      </Route>
      {/* <Route exact path='/friends' component={FriendsList} />
      <Route exact path='/friends/add' component={AddFriend} /> */}

    </div>
    </Router>
  );
}

export default App;

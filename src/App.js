import React, {Component} from 'react';
import {UserForm} from './components/UserForm'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {

    return (
      // <Router>
        <div className="App">
          <UserForm/>
          {/* <Login/> */}
          {/* <Switch> */}
            {/* <Route path='/' exact component={Login} />
            <Route path='/signup' component={UserForm} /> */}
          {/* </Switch> */}
        </div>
      // </Router>
    );
  }
}

export default App;

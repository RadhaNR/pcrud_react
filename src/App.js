import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './app/components/Login';
import Register from './app/components/Register';
import Dashboard from './app/components/Dashboard';
import AllPets from './app/components/AllPets';
import PageNotFound from './app/components/PageNotFound';


import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/registeration" component={Register} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/pets" component={AllPets} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

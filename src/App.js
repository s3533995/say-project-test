import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import CustomerReview from './components/customer/CustomerReview'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />   
            <Route path='/customer-review' component={CustomerReview} />         
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation'
import SignInPage from '../Login';
import SignUpPage from '../Register';
import HomePage from '../Home'
import DashboardPage from '../Dashboard'

import * as ROUTES from '../../constants/routes.js';
import "./app.css"


const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.DASHBOARD} component={DashboardPage} />


    </div>
  </Router>
);

export default App;

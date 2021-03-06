import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation'
import SignInPage from '../Login';
import SignUpPage from '../Register';
import HomePage from '../Home'

import * as ROUTES from '../../constants/routes.js';


const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={HomePage} />

    </div>
  </Router>
);

export default App;
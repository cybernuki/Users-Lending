import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation'
import SignInPage from '../Login';
import SignUpPage from '../Register';
import DashboardPage from '../Dashboard'
import HomePage from '../Home'
import { AppContext } from '../Auth';

import * as ROUTES from '../../constants/routes.js';
import "./app.css"


const App = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (

    <Router>


      <div>

      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Navigation/>
        </AppContext.Provider>

        <hr />

        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.DASHBOARD} component={DashboardPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        </AppContext.Provider>

      </div>
    </Router>
  )

};

export default App;

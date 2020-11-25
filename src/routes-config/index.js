import { Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Router } from "react-router";
import history from "config/history";
import PrivateRoute from "helpers/privateRoutes"; // Private Routes, Will only accessible after Login
import AuthRoute from "helpers/authRoutes"; // Auth Routes, Will only accessible before login.

import { Route } from "react-router-dom"; //  Route, Will accessible before and after login (always accessible).

import Spinner from "shared-components/Spinner";

// Lazy loading of all the components.
const Home = lazy(() => import("web/routes/Home"));
const About = lazy(() => import("web/routes/About"));
const Contact = lazy(() => import("web/routes/Contact"));
const Career = lazy(() => import("web/routes/Career"));
const Logout = lazy(() => import("web/routes/Logout"));
const Login = lazy(() => import("web/routes/Login"));

// Root routes
const Routes = () => (
  <Router history={history}>
    <Suspense fallback={<Spinner></Spinner>}>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/test" component={Login} />
        <AuthRoute path="/login" component={Login} />

        <PrivateRoute path="/logout" component={Logout} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;

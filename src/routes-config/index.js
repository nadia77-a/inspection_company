import { Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
// import { Router } from "react-router";
// import history from "config/history";
//import PrivateRoute from "helpers/privateRoutes"; // Private Routes, Will only accessible after Login

import { Route, HashRouter } from "react-router-dom"; //  Route, Will accessible before and after login (always accessible).

import Spinner from "shared-components/Spinner";

// Lazy loading of all the components.
const Home = lazy(() => import("../web/routes/Home"));
const About = lazy(() => import("../web/routes/About"));
const Contact = lazy(() => import("../web/routes/Contact"));
// const Logout = lazy(() => import("web/routes/Logout"));
// const Login = lazy(() => import("web/routes/Login"));

const QualitySupport = lazy(() => import("../web/routes/QualitySupport"));
const ManpowerServices = lazy(() => import("../web/routes/ManpowerServices"));
const Design = lazy(() => import("../web/routes/Design"));
const Welding = lazy(() => import("../web/routes/Welding"));
const OilGas = lazy(() => import("../web/routes/OilGas"));

// Root routes
const Routes = () => (
  <HashRouter basename="/">
    <Suspense fallback={<Spinner></Spinner>}>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/test" component={Login} /> */}
        {/* <AuthRoute path="/login" component={Login} /> */}

        <Route exact path="/design" component={Design} />
        <Route exact path="/inspection-expediting" component={ManpowerServices} />

        <Route exact path="/welding" component={Welding} />
        <Route exact path="/quality-support" component={QualitySupport} />
        <Route exact path="/oil-gas" component={OilGas} />

        {/* <PrivateRoute path="/logout" component={Logout} /> */}
      </Switch>
    </Suspense>
  </HashRouter>
);

export default Routes;

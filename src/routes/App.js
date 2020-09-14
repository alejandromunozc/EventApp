import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "../containers/LandingPage";
import Layout from "../components/Layout";
import SignUp from "../containers/SignUp";
import SignupAdmin from "../containers/SignUpAdmin";
import Login from "../containers/Login";
import MyEvents from "../containers/MyEvents";
import EventModule from "../containers/EventModule";
import Templates from "../containers/Templates";
import ClassicContainer from "../containers/ClassicTemplate";
// import MinimalistContainer from "../containers/MinimalistTemplate";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signup/admin" component={SignupAdmin} />
        <Route exact path="/event-module" component={EventModule} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/myevents" component={MyEvents} />
        <Route exact path="/classic" component={ClassicContainer} />
        {/* <Route exact path="/minimalist" component={MinimalistContainer} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

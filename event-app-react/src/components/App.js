import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SignupAdmin from "../pages/SignupAdmin";
import SignupOrganizer from "../pages/SignupOrganizer";
import OrganizerModule from "../pages/OrganizerModule";
import EventModule from "../pages/EventModule";
import Templates from "../pages/Templates";
import MyEvents from "../pages/MyEvents";
import ClassicContainer from "../pages/ClassicContainer";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup/admin" component={SignupAdmin} />
        <Route exact path="/signup/organizer" component={SignupOrganizer} />
        <Route exact path="/organizer" component={OrganizerModule} />
        <Route exact path="/event-module" component={EventModule} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/myevents" component={MyEvents} />
        <Route exact path="/classic" component={ClassicContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

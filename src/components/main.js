import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
// import assign from "./assign";
import sp_department from "./sp_department";
import sp_addEmployee from "./sp_addEmployee";
import sp_listEmployee from "./sp_listEmployee";
import Login from "./login";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/sp_department" component={sp_department} />
    <Route path="/sp_addEmployee" component={sp_addEmployee} />
    <Route path="/sp_listEmployee" component={sp_listEmployee} />

    <Route path="/resume" component={Resume} />
    <Route path="/login" component={Login} />
    {/* <Route path="/assign" component={assign} /> */}
  </Switch>
);

export default Main;

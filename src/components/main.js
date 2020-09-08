import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import AddDepartment from "./addDepartment";
import AddEmployee from "./addEmployee";
import ListEmployee from "./listEmployee";
import assign from "./assign";
import Resume from "./resume";
import Login from "./login";
// import sp_department from "./sp_department";
// import sp_addEmployee from "./sp_addEmployee";
// import sp_listEmployee from "./sp_listEmployee";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />

    <Route exact path="/addDepartmen" component={AddDepartment} />
    <Route exact path="/addEmployee" component={AddEmployee} />
    <Route exact path="/listEmployee" component={ListEmployee} />
    <Route path="/assign" component={assign} />

    <Route path="/resume" component={Resume} />
    <Route path="/login" component={Login} />

    {/* <Route path="/sp_department" component={sp_department} /> */}
    {/* <Route path="/sp_addEmployee" component={sp_addEmployee} /> */}
    {/* <Route path="/sp_listEmployee" component={sp_listEmployee} /> */}
  </Switch>
);

export default Main;

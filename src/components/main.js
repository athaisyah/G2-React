import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
// import AboutMe from "./aboutme";
// import Contact from "./contact";
// import Projects from "./projects";
import AddDepartment from "./addDepartment";
import addEmployee from "./addEmployee";
import listEmployee from "./listEmployee";
import assign from "./assign";
import Resume from "./resume";
// import sp_department from "./sp_department";
// import sp_addEmployee from "./sp_addEmployee";
// import sp_listEmployee from "./sp_listEmployee";
import Login from "./login";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />

    {/* <Route path="/sp_department" component={sp_department} /> */}
    {/* <Route path="/sp_addEmployee" component={sp_addEmployee} /> */}
    {/* <Route path="/sp_listEmployee" component={sp_listEmployee} /> */}

    {/* <Route path="/aboutme" component={AboutMe} /> */}
    {/* <Route path="/contact" component={Contact} /> */}
    {/* <Route path="/projects" component={Projects} /> */}

    <Route path="/addDepartmen" component={AddDepartment} />
    <Route path="/addEmployee" component={addEmployee} />
    <Route path="/listEmployee" component={listEmployee} />
    <Route path="/assign" component={assign} />

    <Route path="/resume" component={Resume} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Main;

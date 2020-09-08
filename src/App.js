import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              HRD
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/addDepartmen">Add Department</Link>
            <Link to="/addEmployee">Add Employee</Link>
            <Link to="/listEmployee">List Employee</Link>
            <Link to="/assign">Assign Employee</Link>

            <Link to="/resume">Resume</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/"></Link>

            {/* <Link to="/sp_department">Department</Link> */}
            {/* <Link to="/sp_addEmployee">Add Employee</Link> */}
            {/* <Link to="/sp_listEmployee">List Employee</Link> */}
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              MyPortfolio
            </Link>
          }
        >
          <Navigation>
            <Link to="/addDepartmen">Add Department</Link>
            <Link to="/addEmployee">Add Employee</Link>
            <Link to="/listEmployee">List Employee</Link>
            <Link to="/resume">Resume</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profile1 from "./profile1.png";
import Education from "./resume/education";
import Experience from "./resume/experience";
import Skills from "./resume/skills";
import "../App.css";

class Resume extends Component {
  render() {
    return (
      <div className="body">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={profile1}
                alt="avatar"
                style={{ height: "350px", width: "350px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Aisah Taufik</h2>
            <h4 style={{ color: "grey" }}>Fullstack Student</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>16, Tangerang Selatan. 15415</p>
            <h5>Phone</h5>
            <p>+628221234567</p>
            <h5>Email</h5>
            <p>athaisyah@yahoo.com</p>
            <h5>Web</h5>
            <p>athaisya.tumblr.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Universiti Sains Malaysia"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Education
              startYear={2012}
              endYear={2015}
              schoolName="SMAN 11 Kota Tangerang Selatan"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #833fb2" }} />

            <h2>Experience</h2>
            <Experience
              startYear="March 2020"
              endYear="July 2020"
              jobName="Esri Indonesia"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <Experience
              startYear="June 2019"
              endYear="December 2019"
              jobName="Centre For Global Archaeological Research"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #833fb2" }} />

            <h2>Skills</h2>
            <Skills skill="ArcGIS" progress={95} />
            <Skills skill="ArcMap" progress={85} />
            <Skills skill="HTML" progress={70} />
            <Skills skill="CSS" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

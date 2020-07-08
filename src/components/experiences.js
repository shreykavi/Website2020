import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Typing from "react-typing-animation"
import ExpCard from "./ExpCard"
// var Scroll = require("react-scroll")

import "../styles/experience.css"
import { createGenerateClassName } from "@material-ui/core"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

var jobs = [
  {
    title: "Verkada",
    image: "verkada_logo.png",
    date: "September - December 2019",
    location: "San Mateo, CA",
    tech:
      "Python, Flask, PostgreSQL, DynamoDB, Redis, CircleCI, Twilio, pytest, AWS",
    small_description: "Backend Engineering",
    large_description:
      "Developed cross server services for features that interface client IoT devices.<br><br>Used historical camera captures to track paths of specific individuals on a floor plan.<br><br>Sharing feature grants external contacts with temporary access to secured content.<br><br>Test driven development with isolated unit tests and code reviews for daily releases.",
  },
  {
    title: "Clearpath Robotics Inc.",
    image: "clearpath_logo.png",
    date: "September - December 2018",
    location: "Kitchener, ON",
    tech: "ROS, RVIZ, Gazebo, 2D/3D Lidars, RTK GPS, IMU, SNMP, EKF, SLAM",
    small_description: "Software Developer",
    large_description:
      "Developed docking algorithm that autonomously navigates robot into dock for automated charging.<br><br>Setup RTK GPS for precise satellite positioning with SwiftNav Duro. This was later utilized by an engineering to develop a navigation software.<br><br>Improved Gazebo simulation development environments for more realistic behavior.",
  },
  {
    title: "Miovision Technologies",
    image: "miovision_logo.png",
    date: "January - April 2018",
    location: "Kitchener, ON",
    tech:
      "Code Composer Studio, Tiva microcontroller, C++, Python, Linux, SPI, MongoDB, Express.js, AngularJS, Node.js",
    small_description: "Hardware Firmware Developer",
    large_description:
      "Developed microcontroller firmware to control testing hardware used for water rating new devices.<br><br>Created full-stack MEAN applications over multiple servers to gather and organize hardware test data from multiple Databases. This data was used to track device manufacturing data.<br><br>Enhanced existing device firmware by adding features and optimizing performance.",
  },
  {
    title: "RBC GAM",
    image: "rbc_logo.png",
    date: "June - September 2017",
    location: "Toronto, ON",
    tech:
      "React, JQuery, Laravel, Node.js, SQL, Git, Bash, JavaScript, ES6, HTML5, CSS3",
    small_description: "Web Developer",
    large_description:
      "Developed full-stack applications used by thousands of advisors all over Canada.<br><br>Reconstructed third-party web tools using React framework.<br><br>Helped build and add numerous features to existing tools.<br><br>Patched critical bugs under time constraints.",
  },
  {
    title: "Finastra",
    image: "finastra_logo.png",
    date: "September - December 2016",
    location: "Mississauga, ON",
    tech: "API Testing, Performance Testing, Automated Testing, C#, Java",
    small_description: "Software Engineering in Test",
    large_description:
      "Worked in an Agile Environment with daily Scrum updates.<br><br>Designed automated testing scripts using C#.<br><br>Develop Testing Framework with Apache JMeter for automating API Testing. It inputted and outputted from CSV files so anyone could setup automated tests.<br><br>Worked with developers to make sure API's were functional and free of defects. Small exposure to Oracle SQL Databases and API development.",
  },
  {
    title: "Plan Group",
    image: "plan_logo.png",
    date: "January - April 2016",
    location: "Vaughan, ON",
    tech: "AutoCAD, Single Line Diagrams, Design to Problem Solve",
    small_description: "CAD Engineering",
    large_description:
      "Addressed design and formatting concerns from various clients. These were then added to existing drawings which were used for construction.<br><br>Worked on Single Line Diagram Schematics for multiple clients.<br><br>Utilized AutoCAD to complete drawings for records and manuals.",
  },
]
var exp = jobs.map(job => <ExpCard topic={job} />)

class Experience extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      expanded: false,
    }
  }
  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }
  render() {
    return (
      <div
        style={{
          margin: `0 auto`,
          // padding: "200px",
          width: "100%",
          height: this.state.expanded
            ? window.innerHeight * 1.4
            : window.innerHeight,
          background: "yellow",
          textAlign: "center",
        }}
      >
        <h1 className="header">Experiences</h1>
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            textAlign: "center",
            flexWrap: "wrap",
            // margin: "30px",
            justifyContent: "center",
            height: this.state.expanded ? 720 : 350,
          }}
        >
          {exp}
        </div>
        <button onClick={this.toggleExpand}>
          show {this.state.expanded ? "less" : "more"}
        </button>
      </div>
    )
  }
}

export default Experience

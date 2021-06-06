import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import { Figure } from 'react-bootstrap'
import './adminheader.css';
import { Link, Redirect } from 'react-router-dom'

export default class AdminHeader extends React.Component {
  render() {
    return (
      <div>



        <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
          <ReactBootStrap.Col xs={1} md={1} lg={1}>
            <Figure>
              <Figure.Image
                className="img-responsive"
                alt="20x20"
                src="/assets/images/cvrlogo.png"

              />

            </Figure>
          </ReactBootStrap.Col>
          <ReactBootStrap.Navbar.Brand href="#home">CSE DEPARTMENT</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="navbar-brand mx-auto">
              <ReactBootStrap.Nav.Link href="/admin/AdminResearch">Research</ReactBootStrap.Nav.Link>



              <ReactBootStrap.Nav.Link href="/admin/AdminWorkshops">Workshops</ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link href="/admin/AlumniForm">Alumni</ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link href="/admin/Announcements">Announcements</ReactBootStrap.Nav.Link>

              <ReactBootStrap.Nav.Link href="/admin/Report">Report</ReactBootStrap.Nav.Link>


              <ReactBootStrap.Nav.Link href="/admin/AdminComplaintBox">view complaints</ReactBootStrap.Nav.Link>



            </ReactBootStrap.Nav>
            <Link to="/admin/logout" style={{ color: "white", width: "80px", height: "40px" }}>Logout</Link>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>

      </div>
    )
  }
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {Figure} from 'react-bootstrap'
import './adminheader.css';

export default class AdminHeader extends React.Component {
    render() {
        return (
            <div>
                
                

                <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
                <ReactBootStrap.Col  xs={1} md={1} lg={1}>
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
                  
                    <ReactBootStrap.Nav.Link href="/admin/AdminStudentCorner">Student Corner</ReactBootStrap.Nav.Link>

                    <ReactBootStrap.Nav.Link href="/admin/AdminWorkshops">Workshops</ReactBootStrap.Nav.Link>

                    <ReactBootStrap.Nav.Link href="/admin/AlumniForm">Alumini</ReactBootStrap.Nav.Link>

                    <ReactBootStrap.Nav.Link href="/admin/Announcements">Announcements</ReactBootStrap.Nav.Link>

                    <ReactBootStrap.Nav.Link href="/admin/Report">Report</ReactBootStrap.Nav.Link>

                    <ReactBootStrap.Nav.Link href="/admin/login">Login</ReactBootStrap.Nav.Link>

                    

                    

                    

                  </ReactBootStrap.Nav>
                  
                </ReactBootStrap.Navbar.Collapse>
              </ReactBootStrap.Navbar>

            </div>
        )
    }
}
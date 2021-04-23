import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import * as ReactBootStrap from "react-bootstrap";
import {Figure} from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <div>  
                        
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">

                        <a href="/home" className="logo mr-auto"><img src="assets/images/cvr logo1.png" alt="" className="img-fluid"/></a>
                        
                            <nav className="nav-menu d-none d-lg-block">

                                <ul>
                                    <li className="active"><a href="index.html" styleprop="text-decoration: none;">Home</a></li>
                                    <li><a href="/faculty" styleprop="text-decoration: none;">Faculty</a></li>
                                    
                                    <li className="drop-down"><a href="" styleprop="text-decoration: none;">Infrastructure</a>
                                    <ul>
                                        <li><a href="/labs" styleprop="text-decoration: none;">Labs</a></li>
                                        <li><a href="/seminar" styleprop="text-decoration: none;">Seminar Hall</a></li>
                                        <li><a href="/library" styleprop="text-decoration: none;">className rooms &amp; Library</a></li>
                                        
                                    </ul>
                                    </li>
                                    <li className="drop-down"><a href="#" styleprop="text-decoration: none;">Research</a>
                                    <ul>
                                        <li><a href="/research" styleprop="text-decoration: none;">2021</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2020</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2019</a></li>
                                        
                                    </ul>
                                    </li>
                                    <li className="drop-down"><a href="" styleprop="text-decoration: none;">Workshops &amp; FDP's</a>
                                    <ul>
                                        <li><a href="/workshops" styleprop="text-decoration: none;">2021</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2020</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2019</a></li>
                                        
                                    </ul>
                                    </li>
                                    <li className="drop-down"><a href="#" styleprop="text-decoration: none;">Student Corner</a>
                                    <ul>
                                        <li><a href="/fourthyear" styleprop="text-decoration: none;">IV year</a></li>
                                        <li><a href="/thirdyear" styleprop="text-decoration: none;">III year</a></li>
                                        <li><a href="/secondyear" styleprop="text-decoration: none;">II year</a></li>
                                        <li><a href="/firstyear" styleprop="text-decoration: none;">I year</a></li>
                                        <li><a href="/complaint" styleprop="text-decoration: none;">Complaint Box</a></li>
                                        <li><a href="/events" styleprop="text-decoration: none;">Events</a></li>
                                        
                                    </ul>
                                    </li>
                                    <li><a href="/alumni" styleprop="text-decoration: none;">Alumni</a></li>
                                    <li><a href="/developers" styleprop="text-decoration: none;">Developers</a></li>
                                
                                </ul>

                                
                            
                            </nav>
                                
                    </div>
                </header>     
            </div>
            )
        }
    }
    
    
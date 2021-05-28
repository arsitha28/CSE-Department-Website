import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';


export default class Header extends React.Component {
    render() {
        return (
            <div>  
                        
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">

                        <a href="/" className="logo mr-auto"><img src="assets/images/cvrlogo.png" alt="" className="img-fluid"/></a>
                        
                            <nav className="nav-menu d-none d-lg-block">

                                <ul>
                                    <li className="active"><a href="/" styleprop="text-decoration: none;">Home</a></li>
                                    <li className="drop-down"><a href="/" styleprop="text-decoration: none;">Faculty</a>
                                    <ul>
                                        <li><a href="/faculty_year1" styleprop="text-decoration: none;">2021</a></li>
                                        <li><a href="/faculty_year2" styleprop="text-decoration: none;">2020</a></li>
                                        <li><a href="/faculty_year3" styleprop="text-decoration: none;">2019</a></li>
                                        
                                        
                                    </ul>
                                    </li>
                                    
                                    <li className="drop-down"><a href="/" styleprop="text-decoration: none;">Infrastructure</a>
                                    <ul>
                                        <li><a href="/infrastructure_labs" styleprop="text-decoration: none;">Labs</a></li>
                                        <li><a href="/infrastructure_seminar" styleprop="text-decoration: none;">Seminar Hall</a></li>
                                        <li><a href="/infrastructure_library" styleprop="text-decoration: none;">Library</a></li>
                                        
                                    </ul>
                                    </li>
                                    <li className="drop-down"><a href="/" styleprop="text-decoration: none;">Research</a>
                                    <ul>
                                        <li><a href="/research_year1" styleprop="text-decoration: none;">2021</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2020</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2019</a></li>
                                        
                                    </ul>
                                    </li>
                                    <li className="drop-down"><a href="/" styleprop="text-decoration: none;">Workshops &amp; FDP's</a>
                                    <ul>
                                        <li><a href="/workshops_year1" styleprop="text-decoration: none;">2021</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2020</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2019</a></li>
                                        
                                    </ul>
                                    </li>
                                    <li className="drop-down"><a href="/" styleprop="text-decoration: none;">Student Corner</a>
                                    <ul>
                                        <li className="drop-down"><a href="/fourthyear" styleprop="text-decoration: none;">B.Tech</a>
                                            <ul>
                                                <li className="drop-down"><a href="/" styleprop="text-decoration: none;">IV Year</a>
                                                    <ul>
                                                        <li><a href="/studentcorner_btech_year4_cse" styleprop="text-decoration: none;">CSE</a></li>
                                                        <li><a href="/studentcorner_btech_year4_ai" styleprop="text-decoration: none;">AI &amp; ML</a></li>
                                                        <li><a href="/studentcorner_btech_year4_ds" styleprop="text-decoration: none;">DS</a></li>
                                                        <li><a href="/studentcorner_btech_year4_cs" styleprop="text-decoration: none;">CS</a></li>
                                                
                                                
                                                    </ul>
                                                </li>
                                                <li className="drop-down"><a href="/" styleprop="text-decoration: none;">III Year</a>
                                                    <ul>
                                                        <li><a href="/studentcorner_btech_year3_cse" styleprop="text-decoration: none;">CSE</a></li>
                                                        <li><a href="/studentcorner_btech_year3_ai" styleprop="text-decoration: none;">AI &amp; ML</a></li>
                                                        <li><a href="/studentcorner_btech_year3_ds" styleprop="text-decoration: none;">DS</a></li>
                                                        <li><a href="/studentcorner_btech_year3_cs" styleprop="text-decoration: none;">CS</a></li>
                                                
                                                
                                                    </ul>
                                                </li>
                                                <li className="drop-down"><a href="/" styleprop="text-decoration: none;">II Year</a>
                                                    <ul>
                                                    <li><a href="/studentcorner_btech_year2_cse" styleprop="text-decoration: none;">CSE</a></li>
                                                        <li><a href="/studentcorner_btech_year2_ai" styleprop="text-decoration: none;">AI &amp; ML</a></li>
                                                        <li><a href="/studentcorner_btech_year2_ds" styleprop="text-decoration: none;">DS</a></li>
                                                        <li><a href="/studentcorner_btech_year2_cs" styleprop="text-decoration: none;">CS</a></li>
                                                
                                                    </ul>
                                                </li>
                                                <li className="drop-down"><a href="/" styleprop="text-decoration: none;">I Year</a>
                                                    <ul>
                                                    <li><a href="/studentcorner_btech_year1_cse" styleprop="text-decoration: none;">CSE</a></li>
                                                        <li><a href="/studentcorner_btech_year1_ai" styleprop="text-decoration: none;">AI &amp; ML</a></li>
                                                        <li><a href="/studentcorner_btech_year1_ds" styleprop="text-decoration: none;">DS</a></li>
                                                        <li><a href="/studentcorner_btech_year1_cs" styleprop="text-decoration: none;">CS</a></li>
                                                
                                                
                                                    </ul>
                                                </li>
                                            
                                            
                                            </ul>
                                        </li>
                                        <li className="drop-down"><a href="/mtech" styleprop="text-decoration: none;">M.Tech</a>
                                            <ul>
                                                <li><a href="/studentcorner_mtech_year1" styleprop="text-decoration: none;">I Year</a></li>
                                                <li><a href="/studentcorner_mtech_year2" styleprop="text-decoration: none;">II Year</a></li>
                                                        
                                                
                                                
                                            </ul>
                                        </li>
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
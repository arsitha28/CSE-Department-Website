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
                                        <li><a href="/year1" styleprop="text-decoration: none;">2021</a></li>
                                        <li><a href="/year2" styleprop="text-decoration: none;">2020</a></li>
                                        <li><a href="/year3" styleprop="text-decoration: none;">2019</a></li>
                                        
                                        
                                    </ul>
                                    </li>
                                    
                                    <li className="drop-down"><a href="/" styleprop="text-decoration: none;">Infrastructure</a>
                                    <ul>
                                        <li><a href="/lab" styleprop="text-decoration: none;">Labs</a></li>
                                        <li><a href="/seminar" styleprop="text-decoration: none;">Seminar Hall</a></li>
                                        <li><a href="/library" styleprop="text-decoration: none;">Library</a></li>
                                        
                                    </ul>
                                    </li>
                                    <li className="drop-down"><a href="/" styleprop="text-decoration: none;">Research</a>
                                    <ul>
                                        <li><a href="/research" styleprop="text-decoration: none;">2021</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2020</a></li>
                                        <li><a href="#" styleprop="text-decoration: none;">2019</a></li>
                                        
                                    </ul>
                                    </li>
                                    <li className="drop-down"><a href="/" styleprop="text-decoration: none;">Workshops &amp; FDP's</a>
                                    <ul>
                                        <li><a href="/workshops" styleprop="text-decoration: none;">2021</a></li>
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
                                                        <li><a href="/cse4" styleprop="text-decoration: none;">CSE</a></li>
                                                        <li><a href="/ai4" styleprop="text-decoration: none;">AI &amp; ML</a></li>
                                                        <li><a href="/ds4" styleprop="text-decoration: none;">DS</a></li>
                                                        <li><a href="/cs4" styleprop="text-decoration: none;">CS</a></li>
                                                
                                                
                                                    </ul>
                                                </li>
                                                <li className="drop-down"><a href="/" styleprop="text-decoration: none;">III Year</a>
                                                    <ul>
                                                        <li><a href="/cse3" styleprop="text-decoration: none;">CSE</a></li>
                                                        <li><a href="/ai3" styleprop="text-decoration: none;">AI &amp; ML</a></li>
                                                        <li><a href="/ds3" styleprop="text-decoration: none;">DS</a></li>
                                                        <li><a href="/cs3" styleprop="text-decoration: none;">CS</a></li>
                                                
                                                
                                                    </ul>
                                                </li>
                                                <li className="drop-down"><a href="/" styleprop="text-decoration: none;">II Year</a>
                                                    <ul>
                                                    <li><a href="/cse2" styleprop="text-decoration: none;">CSE</a></li>
                                                        <li><a href="/ai2" styleprop="text-decoration: none;">AI &amp; ML</a></li>
                                                        <li><a href="/ds2" styleprop="text-decoration: none;">DS</a></li>
                                                        <li><a href="/cs2" styleprop="text-decoration: none;">CS</a></li>
                                                
                                                    </ul>
                                                </li>
                                                <li className="drop-down"><a href="/" styleprop="text-decoration: none;">I Year</a>
                                                    <ul>
                                                    <li><a href="/cse1" styleprop="text-decoration: none;">CSE</a></li>
                                                        <li><a href="/ai1" styleprop="text-decoration: none;">AI &amp; ML</a></li>
                                                        <li><a href="/ds1" styleprop="text-decoration: none;">DS</a></li>
                                                        <li><a href="/cs1" styleprop="text-decoration: none;">CS</a></li>
                                                
                                                
                                                    </ul>
                                                </li>
                                            
                                            
                                            </ul>
                                        </li>
                                        <li className="drop-down"><a href="/mtech" styleprop="text-decoration: none;">M.Tech</a>
                                            <ul>
                                                <li><a href="/firstyear" styleprop="text-decoration: none;">I Year</a></li>
                                                <li><a href="/secondyear" styleprop="text-decoration: none;">II Year</a></li>
                                                        
                                                
                                                
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
    
    
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import * as ReactBootStrap from "react-bootstrap";
import {Figure} from 'react-bootstrap';

export default class Header extends React.Component {
    state = {
        itemList: [
       
        ]
      };
      
      classAPI(){
        fetch("http://localhost:9000/mainWebsiteAPI/announcement")
        .then(res => res.json())
        .then(res=>this.setState({itemList:res}));
      }
    
      componentWillMount(){
        this.classAPI();
      }
      renderItems() {
        return this.state.itemList.map(item => (
            <table  class="table table-hover">
            <tr><td width="20%">{item.announcementValue}</td>
            
         </tr>
         </table>
        ));
      }
    
        
    render() {
        return (
            <div>
                <section id="hero">
                    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                
                        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
                
                        <div class="carousel-inner" role="listbox">
                
                        
                        

                        <div class="carousel-item active" style={{backgroundImage: 'url(assets/images/cse_block3.png)'}}>
                            <div class="carousel-container">

                            <div class="container">
                                <h1 class="animated fadeInDown">CVR College of Engineering</h1>
                                
                                <h3>Computer Science and Engineering Department</h3>
                            </div>
                            </div>
                        </div>


                        <div class="carousel-item" style={{backgroundImage: 'url(assets/images/apple_lab.png)'}}>
                            <div class="carousel-container">

                            <div class="container">
                                <h3 class="animated fadeInDown">Apple Lab</h3>
                            </div>
                            </div>
                        </div>
                
                        
                        <div class="carousel-item" style={{backgroundImage: 'url(assets/images/faculty1.jpg.png)'}}>
                            <div class="carousel-container">

                            <div class="container">
                                <h3 class="animated fadeInDown">Faculty</h3>
                            </div>
                            </div>
                        </div>
                
                        </div>
                
                        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                
                        <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                
                    </div>
                    </section>

                    <div class="alert alert-info">
                        <marquee>
                            <a href="/updates" class="alert-link"><strong>COVID 19 </strong> Precautions taken at our campus</a>
                        </marquee>
                    </div>

                    <h1> Announcements</h1>
                        {this.renderItems()}

                    <section class="page-section clearfix">
                    <div class="container">
                        <div class="intro">
                        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded animated bounce bounceInLeft" src="assets/images/porfolio-3.jpg" alt=""/>
                        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 class="section-heading mb-4">
                            <span class="section-heading-upper">Message By</span>
                            <span class="section-heading-lower">Head Of the Department</span>
                            </h2>
                            <p class="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!
                            </p>
                            <div class="intro-button mx-auto">
                            <a class="btn btn-primary btn-xl" href="#">Know More</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>



                    <div id="demo" class="carousel slide" data-ride="carousel">

                    <div class="general-title">
                        <h3>STRENGTHS OF THE DEPARTMENT</h3>
                        <hr/>
                    </div>
                    
                    <ul class="carousel-indicators">
                        <li class="bg-dark" data-target="#demo" data-slide-to="0" class="active"></li>
                        <li class="bg-dark" data-target="#demo" data-slide-to="1"></li>
                        <li class="bg-dark" data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    
                    
                    <div class="container carousel-inner no-padding">
                        <div class="carousel-item active">
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                            
                        </div>    
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>   
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>   
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>   
                        </div>
                        <div class="carousel-item">
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>    
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>   
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>   
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>  
                        </div>
                        <div class="carousel-item">
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>    
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>   
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>   
                        <div class="col-xs-3 col-sm-3 col-md-3">
                            <div class="figure">
                            <img src="assets/images/work-img1.jpg"/>
                            <div class="caption">
                                <div class="about">
                                    <p>This is just a demo</p>
                                </div>

                            </div>
                            </div>
                        </div>  
                    </div>
                </div>
                
            </div>
        
            </div>
        )
    }
}
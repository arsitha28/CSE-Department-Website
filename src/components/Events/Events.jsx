import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './events.css';


export default class Events extends React.Component {
    render() {
        return (
            <div>
  <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8">
          <h1 >Welcome to <span>CVR CSE Events</span></h1>
          <h2>A great place where students show their creativity !</h2>

        
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=o-gHFwufTn4" class="venobox play-btn" data-vbtype="video" data-autoplay="true"></a>
        </div>

      </div>
    </div>
  </section>

            <section id="gallery" class="gallery">



            <div class="container" data-aos="fade-up">
        <div class="section-title">
          
          <p>Some photos from Our Exiting Events </p>
        </div>
      </div>

      <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">

        <div class="row no-gutters">

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              
                <img height="370px" width="370px"src="assets/images/eventpic-4.jpg"/> 
              
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              
                <img  height="370px" width="550px" src="assets/images/event-1.jpg"/>  
              
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              
                <img  height="370px" width="700px" src="assets/images/event-2.jpg"/>  
              
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              
                <img   height="370px" width="700px"src="assets/images/event-3.jpg"/>  
              
            </div>
          </div>


    
          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              
                <img  height="370px" width="370px" src="assets/images/model-img3.jpg"/>  
              
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              
                <img  height="370px" width="370px" src="assets/images/model-img3.jpg"/>  
              
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              
                <img  height="370px" width="370px" src="assets/images/model-img3.jpg"/> 
              
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              
                <img  height="370px" width="370px" src="assets/images/model-img3.jpg"/> 
              
            </div>
          </div>

        </div>

      </div>

      <div class="section-title" data-aos="fade-up" >
        <h3>Description</h3>
        <hr/>
                     
      </div>

      <div><p>We conduct cse branch fest called cybernauts every year where students from cse branch showcase their tallent and also participate in many competitions.</p></div>

</section>
                
            </div>
        )
    }
}
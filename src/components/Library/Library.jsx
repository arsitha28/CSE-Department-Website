import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './library.css';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


export default class Library extends React.Component {
    render() {
        return (
            <div>
                

                <br/>
              <br/>

     

              <section id="specials" class="specials">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
         
          <p> Library Specifications</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a class="nav-link active show" data-toggle="tab" href="#tab-1">TITLE 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-2">TITLE 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-3">TITLE 3</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-4">TITLE 4</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab-5">TITLE 5</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Title 1</h3>
                    <p class="font-italic">Sub Heading </p>
                    <p>Description</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/images/model-img3.jpg"/>  
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Title 2</h3>
                    <p class="font-italic">Sub Heading </p>
                    <p>Description</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/images/model-img3.jpg"/>  
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Title 3</h3>
                    <p class="font-italic">Sub Heading </p>
                    <p>Description</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/images/model-img3.jpg"/>  
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-4">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Title 4</h3>
                    <p class="font-italic">Sub Heading </p>
                    <p>Description</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/images/model-img3.jpg"/>  
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-5">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Title 5</h3>
                    <p class="font-italic">Sub Heading </p>
                    <p>Description</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="assets/images/model-img3.jpg"/>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>




                
            </div>
        )
    }
}
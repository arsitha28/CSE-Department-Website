import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';


export default class Footer extends React.Component {
    render() {
        return (
            <div>
                
                <footer className="mainfooter" role="contentinfo">
              <div className="footer-middle">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                  
                    <div className="footer-pad">
                      <h4 styleprop="color:#310892;">Our Address</h4>
                      <p>
                        CVR College Of Engineering <br/>
                        Vastunagar, Mangalpalli (V), Ibrahimpatnam (M)<br/>
                        Rangareddy (D), Telangana 501 510 <br/><br/>
                        <strong styleprop="color:#310892;">Phone </strong><i className="fa fa-phone fa-lg"></i> : 040-42204001<br/>
                        <strong styleprop="color:#310892;">Email </strong><i className="fa fa-envelope fa-lg"></i> : principal@cvr.ac.in<br/>
                        
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                  
                    <div className="footer-pad">
                      <h4 styleprop="color:#310892;">Useful Links</h4>
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">College Website</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    
                    <div className="footer-pad" styleprop="margin-left: -100px;">
                      <div id="map-container-google-1" className="embed-responsive embed-responsive-18by9" styleprop="height: 200px; width: 350px">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.460853988698!2d78.59506221471405!3d17.196418412811365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0xf39a771705e23170!2sCVR%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1614071871344!5m2!1sen!2sin" width="400" height="300" styleprop="border:0;" allowfullscreen="" loading="lazy"></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3" styleprop="margin-left: 0px;">
                    <h4 styleprop="color:#310892;">Social Media</h4>
                        <ul className="social-network social-circle">
                        <li><a href="https://twitter.com/cvrcoenews?lang=en" className="icoTwitter"><i className="bx bxl-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/cvr.coe/" className="icoFacebook"><i className="bx bxl-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/cvr_college/?hl=en" className="icoInstagram"><i className="bx bxl-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/cvr-college-of-engineering-a1a27795" className="icoLinkedin"><i className="bx bxl-linkedin"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCYd3RUcKpZBWkRvApVnKtPw/videos)" className="icoYoutube"><i className="bx bxl-youtube"></i></a></li>
                        </ul>				
                  </div>
                </div>
              <div className="row">
                <div className="col-md-12 copy">
                  <p className="text-center text-md-left">Copyright &copy; <strong><span>2021 </span></strong>CVR College of Engineering, All Rights Reserved.</p>
                </div>
              </div>
            
            
              </div>
              </div>
            </footer>
                
            </div>

            
        )
    }
}
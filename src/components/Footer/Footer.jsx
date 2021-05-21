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
                          <strong style={{marginLeft:'-5px'}}>Phone </strong><i className="fa fa-phone fa-lg"></i> : 040-42204001<br/>
                          <strong style={{marginLeft:'-3px'}}>Email </strong><i className="fa fa-envelope fa-lg"></i> : vani_vathsala@cvr.ac.in<br/>
                          
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    
                      <div className="footer-pad">
                        <h4>Useful Links</h4>
                        <ul>
                          <li><a href="/">Home</a></li>
                          <li><a href="/year1">Faculty</a></li>
                          <li><a href="/lab">Infrastructure</a></li>
                          <li><a href="/research">Research</a></li>
                          <li><a href="/workshops">Workshops</a></li>
                          <li><a href="/fourthyear">Student Corner</a></li>
                          <li><a href="/alumni">Alumini</a></li>
                          <li><a href="/developers">Developers</a></li>
                          <li><a href="http://cvr.ac.in/home4/">College Website</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      
                      <div className="text-center">
                          <br/>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.460959492319!2d78.59506221482327!3d17.19641328819331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0xf39a771705e23170!2sCVR%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1617464087257!5m2!1sen!2sin" width="220" height="150" styleprop="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
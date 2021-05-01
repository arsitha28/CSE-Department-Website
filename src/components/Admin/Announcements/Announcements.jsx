import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Announcements extends React.Component {
    render() {
        return (
            <div>
               
              <div class="container">  
              <div class="form-group">
              <label for="Announcement">Announcement:</label>
               <textarea class="form-control" rows="5" id="Announcement"></textarea>
                </div>



<div class="row">
    <div class="col-md-4 col-lg-2">
        
      <button class="btn btn-primary  btn-block">Send</button>
      </div>
    </div>
  </div>

 
                
            </div>
        )
    }
}
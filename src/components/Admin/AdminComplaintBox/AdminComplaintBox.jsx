import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminComplaintBox.css';


export default class AdminComplaintBox  extends React.Component {
    render() {
        return (
            <div>
                
                
              <table class="table table-responsive table-bordered table-striped table-hover  table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
  


  
  <tr>
      <th><h2>Name</h2></th>
      <th><h2>RollNo</h2></th>
      <th><h2>Complaint</h2></th>
      <th>
   <div class="dropdown">
          
   <h2>Status of the complaint</h2>

  
</div></th>
      
  </tr>
  <tr>
      
      <td>Varun</td>
      <td>13b81a0525</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td><select class="browser-default custom-select">
  <option selected>TAke up</option>
  <option value="1">In progress</option>
  <option value="2">Resolved</option>
  
</select>
</td>
      
  </tr>

  <tr>
      
      <td>Krishna</td>
      <td>  20b81a0432  </td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td><select class="browser-default custom-select ">
  <option selected>TAke up</option>
  <option value="1">In progress</option>
  <option value="2">Resolved</option>
  
</select>
</td>
      
  </tr>

  <tr>
     
      <td>Teja</td>
      <td>37b45b33</td>
      <td>Syllubus is not done yet</td>
      <td><select class="browser-default custom-select">
      <option selected>TAke up</option>
  <option value="1">In progress</option>
  <option value="2">Resolved</option>
  
</select>
</td>
     
  </tr>

  <tr>
      
      <td>Bhavani</td>
      <td>48b81a0543</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td> <select class="browser-default custom-select">
  <option selected>TAke up</option>
  <option value="1">In progress</option>
  <option value="2">Resolved</option>
  
</select>
</td>
      
  </tr>

  <tr>
      
      <td>Madhav</td>
      <td>25b71a0543</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td><select class="browser-default custom-select">
  <option selected>TAke up</option>
  <option value="1">In progress</option>
  <option value="2">Resolved</option>
  
</select>
</td>
     
  </tr>

  <tr>
      
      <td>Ravi shankar</td>
      <td>673g172908</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
     <td> <select class="browser-default custom-select">
  <option selected>TAke up</option>
  <option value="1">In progress</option>
  <option value="2">Resolved</option>
  
  
</select>
</td>
      
  </tr>
  
</table>
             












            </div>
        )
    }
}
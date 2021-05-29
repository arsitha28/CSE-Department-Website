import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminComplaintBox.css';
import AdminHeader from "../AdminHeader";

export default class AdminComplaintBox  extends React.Component {
   
  state = {
    itemList: [
   
    ]
  };
  
  classAPI(){
    fetch("http://localhost:9000/adminAPI/complaint")
    .then(res => res.json())
    .then(res=>this.setState({itemList:res}));
  }

  componentWillMount(){
    this.classAPI();
  }
  
  renderItems() {
    return this.state.itemList.map(item => (
     
        <tr><td width="20%">{item.name}</td>
       <td width="20%">{item.rollno}</td>
        <td width="20%">{item.subject}</td>
        <td width="20%">{item.message}</td></tr>
      
    ));
  }


    render() {
        return (
          
          
          
          <div class="container">

            <AdminHeader/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div class="section-title" data-aos="fade-up" >
              <h1>View Complaints</h1>
              <hr/>
                        
            </div>
            <table class="table table-hover">
            <tr><td width="20%"><b> Name</b></td>
            <td width="20%"><b>Roll Number</b></td>
            <td width="20%"><b>Subject </b></td>
            <td width="20%"><b>Message</b></td></tr>
            {this.renderItems()}
            </table></div>

        )
    }
}
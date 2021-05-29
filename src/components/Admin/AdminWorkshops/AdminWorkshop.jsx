import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminWorkshop.css';
import AdminHeader from "../AdminHeader";
import {Redirect} from 'react-router-dom';


export default class AdminWorkshop extends React.Component {

  
  state = {
 faculty_name :'',
 title:'',
 domain:'',
 from:'',
 to:'',
 responseToPost:'',
 response:''
  };

  onSubmit = () => {
   
        return  <Redirect  to="/" />
    
 }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/adminAPI/workshop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: [this.state.faculty_name, this.state.title, this.state.domain, this.state.from, this.state.to]}),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

    render() {
        return (
            <div class="container">
         
              <AdminHeader/>

              <section id="secA">
              <p>{this.state.response}</p>


              <form  onSubmit={this.handleSubmit}>

              <label for="Faculty Name" class="mr-sm-2">Faculty Name:</label>
                <input type="text" class="form-control mb-2 mr-sm-3"  placeholder="Faculty Name" id="Faculty Name" value={this.state.post}
                          onChange={e => this.setState({faculty_name: e.target.value })}/>

              <label for="Title" class="mr-sm-2"> Title:</label>
                <input type="text" class="form-control mb-2 mr-sm-3" placeholder="Title" id="Title" value={this.state.post}
                          onChange={e => this.setState({title: e.target.value })}/>

              <label for="Domain" class="mr-sm-2">Domain:</label>
                <input type="text" class="form-control mb-2 mr-sm-3" placeholder="Domain" id="Domain" value={this.state.post}
                          onChange={e => this.setState({domain: e.target.value })}/>

              <label for="From_Date" class="mr-sm-2">From Date:</label>
                <input type="text" class="form-control mb-2 mr-sm-3" placeholder="YYYY-MM-DD" id="From" value={this.state.post}
                          onChange={e => this.setState({from: e.target.value })}/>

              <label for="To_Date" class="mr-sm-2">To Date:</label>
                <input type="text" class="form-control mb-2 mr-sm-3" placeholder="YYYY-MM-DD" id="To" value={this.state.post}
                          onChange={e => this.setState({to: e.target.value })
                          }/>

                <button type="submit" onClick={this.onSubmit} class="btn btn-outline-success">ADD NEW ENTRY</button>

                </form>
              
                </section>
              </div>
        )
    }
}
import {React, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Redirect } from 'react-router-dom'
import AdminHeader from "../AdminHeader";

export default class AdminResearch extends Component {


  state = {
    faculty_name :'',
    paper:'',
    domain:'',
    publisher:'',
    responseToPost:'',
    response:'',
    year : ''
     };
   
   
     handleSubmit = async e => {
       e.preventDefault();
       const response = await fetch('/adminAPI/research', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ post: [this.state.faculty_name, this.state.paper, this.state.domain, this.state.publisher, this.state.year]}),
       });
       const body = await response.text();
       this.setState({ responseToPost: body });
       alert("entry recorded");
     };
   
       render() {
           return (
               <div class="container">

                 <AdminHeader/>
                <br/>
                <br/>
                
              <section id="secA">
                
<div class="section-title" data-aos="fade-up" >
    <h3>Add research entry</h3>
    <hr/>
                     
</div>

                <p>{this.state.response}</p>
                
                
                <form  onSubmit={this.handleSubmit}>
                
                  <label for="Faculty Name" class="mr-sm-2">Faculty Name:</label>
                    <input type="text" class="form-control mb-2 mr-sm-3"  placeholder="Faculty Name" id="Faculty Name" value={this.state.post}
                              onChange={e => this.setState({faculty_name: e.target.value })}/>
                  
                  <label for="Title" class="mr-sm-2"> Title of paper :</label>
                    <input type="text" class="form-control mb-2 mr-sm-3" placeholder="Title" id="Title" value={this.state.post}
                              onChange={e => this.setState({paper: e.target.value })}/>
                  
                  <label for="Domain" class="mr-sm-2">Domain:</label>
                    <input type="text" class="form-control mb-2 mr-sm-3" placeholder="Domain" id="Domain" value={this.state.post}
                              onChange={e => this.setState({domain: e.target.value })}/>
                  
                  <label for="From_Date" class="mr-sm-2">Publisher:</label>
                    <input type="text" class="form-control mb-2 mr-sm-3" placeholder="publisher" id="From" value={this.state.post}
                              onChange={e => this.setState({publisher: e.target.value })}/>
                  
                    
                  <label for="year" class="mr-sm-2">Year of publishing:</label>
                    <input type="text" class="form-control mb-2 mr-sm-3" placeholder="YYYY" id="From" value={this.state.post}
                              onChange={e => this.setState({year: e.target.value })}/>
                  
                  
                    <button type="submit" onClick={this.onSubmit} class="btn btn-outline-success">ADD NEW ENTRY</button>
                  
                </form>
                
              </section>

     
     </div>
           )
       }
      }
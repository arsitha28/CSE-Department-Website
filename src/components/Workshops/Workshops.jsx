import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';

export default class Workshops extends React.Component {

  state = {
    itemList: [
   
    ]
  };
  
  classAPI(){
    fetch("http://localhost:9000/mainWebsiteAPI/workshop_year1")
    .then(res => res.json())
    .then(res=>this.setState({itemList:res}));
  }

  componentWillMount(){
    this.classAPI();
  }
  
  renderItems() {
    return this.state.itemList.map(item => (
     
        <tr> <td width="20%">{item.faculty_name}</td>
       <td width="20%">{item.title}</td>
        <td width="20%">{item.domain}</td>
        <td width="20%">{item.from_date}</td>
        <td width="20%">{item.to}</td></tr>
      
    ));
  }


    render() {
        return (
          
          <div class="container">
            <br/>
            <br/>
            <br/>
            <br/>

            <div class="section-title" data-aos="fade-up" >
              <h1>Workshop held in 2021</h1>
              <hr/>
                        
            </div>

            <table class="table table-hover">
            <tr><td width="20%"><b>Faculty Name</b></td>
            <td width="20%"><b>Title</b></td>
            <td width="20%"><b>Domain </b></td>
            <td width="20%"><b>Start Date</b></td>
             <td width="20%"><b>End Date</b></td></tr>
            
            {this.renderItems()}
            </table>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>

        )
    }
}
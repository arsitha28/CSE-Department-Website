import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './research.css';


export default class Research extends React.Component {
  
  state = {
    itemList: [
   
    ]
  };
  
  classAPI(){
    fetch("http://localhost:9000/mainWebsiteAPI/research")
    .then(res => res.json())
    .then(res=>this.setState({itemList:res}));
  }

  componentWillMount(){
    this.classAPI();
  }
  
  renderItems() {
    return this.state.itemList.map(item => (
     
        <tr><td width="20%">{item.faculty_name}</td>
       <td width="20%">{item.paper}</td>
        <td width="20%">{item.domain}</td>
        <td width="20%">{item.publisher}</td></tr>
      
    ));
  }


    render() {
        return (
          
          <div class="container">
            <table class="table table-hover">
            <tr><td width="20%"><b>Faculty Name</b></td>
            <td width="20%"><b>Title of paper</b></td>
            <td width="20%"><b>Domain </b></td>
            <td width="20%"><b>publisher</b></td></tr>
            
            {this.renderItems()}
            </table></div>

        )
    }
}
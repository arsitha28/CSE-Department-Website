import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './alumni.css';


export default class Alumni extends React.Component {
  state = {
    itemList: [
   
    ]
  };
  
  classAPI(){
    fetch("http://localhost:9000/mainWebsiteAPI/alumni")
    .then(res => res.json())
    .then(res=>this.setState({itemList:res}));
  }

  componentWillMount(){
    this.classAPI();
  }

  renderItems() {
    return this.state.itemList.map(item => (
     
        <tr><td width="20%">{item.name}</td>
       <td width="20%">{item.branch}</td>
        <td width="20%">{item.year}</td>
        <td width="20%">{item.currentlyPursuing}</td></tr>
      
    ));
  }

    render() {
        return (
          <div class="container">
            <br/>
            <br/>
            <br/>
            <div class="section-title" data-aos="fade-up" >
              <h1>Alumni</h1>
              <hr/>
                        
            </div>
          <table class="table table-hover">
          <tr><td width="20%"><b> Name</b></td>
          <td width="20%"><b>Branch</b></td>
          <td width="20%"><b>Year of passing out </b></td>
          <td width="20%"><b>Currently pursuing</b></td></tr>
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
          </div>
        )
    }
}
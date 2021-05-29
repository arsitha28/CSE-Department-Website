import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Report.css';
import AdminHeader from "../AdminHeader";

export default class Report extends React.Component {
    state = {
        itemList: [
       
        ],
        search:'',
        responseToPost:[

        ]
      };

      renderItems() {
        return this.state.responseToPost.map(item => (
         
            <tr><td width="50%">{item.Name}</td>
           <td width="50%">{item.certificate}</td>
           </tr>
        ));
      }
      

      
      handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/adminAPI/report', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: [this.state.search]}),
        });
        const body = await response.json(); 
        this.setState({ responseToPost: body });
      };

    
    render() {
        return (
            <div>


              <AdminHeader/>
                <br/>
            <br/>
            <br/>
            <br/>

            <div class="section-title" data-aos="fade-up" >
              <h1>Search based on certifications</h1>
              <hr/>
                        
            </div>
                 <div class="container search-table">
            <div class="search-box">
                <div class="row">
                    <div class="col-md-3">
                        <h5>Search based on certifications</h5>
                    </div>
                    <div class="col-md-9">
                        <form onSubmit={this.handleSubmit}>
                        <input type="text" class="form-control"  value={this.state.post}
            onChange={e => this.setState({ search : e.target.value })} placeholder="Search certificates"/>
                     <br/>
                       
                        <button type="submit"class="btn btn-outline-success">SEARCH</button>
   
                        </form>

                    </div> 
                </div>
            </div>




            <div class="search-list">
                <h3>These Records Found</h3>
                <table class="table" id="myTable">
                   
                <tr><td width="50%"><b> Name</b></td>
            <td width="50%"><b>Certification</b></td>
            </tr>

            {this.renderItems()}
                </table>
        </div>
         
</div>
                
            </div>
        )
    }
}
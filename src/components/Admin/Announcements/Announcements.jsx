import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from "../AdminHeader";


export default class Announcements extends React.Component {

  state = {
    announcement:''
     };

     handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/adminAPI/announcement', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: [this.state.announcement]}),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
        alert("entry recorded");
      };
    

    render() {
        return (
            <div>
              <AdminHeader/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

              <form onSubmit={this.handleSubmit}>
              <div class="container">  
              <div class="form-group">
              <div class="section-title" data-aos="fade-up" >
    <h3>Add new announcement</h3>
    <hr/>
    </div>
              
               <textarea class="form-control" rows="5" id="Announcement" value={this.state.post}
            onChange={e => this.setState({announcement: e.target.value })}></textarea>
                </div>




              <div class="row">
                  <div class="col-md-4 col-lg-2">
                      
                    <button class="btn btn-primary  btn-block">Send</button>
                    </div>
                  </div>
                </div>
                </form>
 
                
            </div>
        )
    }
}
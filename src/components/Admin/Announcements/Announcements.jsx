import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



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
      };
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
              <div class="container">  
              <div class="form-group">
         
              <label for="Announcement">Announcement:</label>
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
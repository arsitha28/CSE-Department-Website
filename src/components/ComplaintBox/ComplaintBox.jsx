import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './complaintbox.css';


export default class ComplaintBox extends React.Component {
     
  state = {
    name :'',
    rollno:'',
    subject:'',
    message:'',
     };

     handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/mainWebsiteAPI/complaint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: [this.state.name, this.state.rollno, this.state.subject, this.state.message]}),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
        alert("entry recorded");
      };
    


    render() {
        return (
            <div>
               
               <section id="cover" class="min-vh-100">
                
                    <div id="cover-caption">
                        <div class="container" data-aos="zoom-in" data-aos-delay="100">
                            <div class="row">
                                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                    <h1 class="display-4 py-2 text-truncate">Complaint Box!</h1>
                                    <div class="px-2">
                                    <form  onSubmit={this.handleSubmit} class="justify-content-center" id="complaintform">
                                            <div class="form-group">

                                            <label for="name">Full Name</label>
                                                <label class="sr-only">Name</label>
                                                <input type="text" class="form-control" placeholder="" value={this.state.post}
            onChange={e => this.setState({name: e.target.value })}/>
                                            </div>

                                            <div class="form-group">
                                            <label for="name">Roll Number</label>
                                                <label class="sr-only">Roll No</label>
                                                <input type="text" class="form-control" placeholder="" value={this.state.post}
            onChange={e => this.setState({rollno: e.target.value })}/>
                                            </div>
                                            
                                        
                                            <div class="form-group">
                                                <label for="name">Subject</label>
                                                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" 
                                                value={this.state.post}
                                                onChange={e => this.setState({subject: e.target.value })}/>
                                                <div class="validate"></div>
                                            </div>

                                            <div class="form-group">
                                                <label for="name">Message</label>
                                                <textarea class="form-control" form="complaintform" name="message" rows="10" data-rule="required" data-msg="Please write something for us" value={this.state.post}
            onChange={e => this.setState({message: e.target.value })}></textarea>
                                                <div class="validate"></div>
                                            </div>
                                         
                                            <button type="submit" class="btn btn-primary btn-lg">send</button>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
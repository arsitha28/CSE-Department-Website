import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './complaintbox.css';


export default class ComplaintBox extends React.Component {
    render() {
        return (
            <div>
               
               <section id="cover" class="min-vh-100">
                
                    <div id="cover-caption">
                        <div class="container"data-aos="zoom-in" data-aos-delay="100">
                            <div class="row">
                                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                    <h1 class="display-4 py-2 text-truncate">Complaint Box!</h1>
                                    <div class="px-2">
                                        <form action="" class="justify-content-center">
                                            <div class="form-group">
                                                <label class="sr-only">Name</label>
                                                <input type="text" class="form-control" placeholder="Full Name"/>
                                            </div>

                                            <div class="form-group">
                                                <label class="sr-only">Roll No</label>
                                                <input type="text" class="form-control" placeholder="Roll No"/>
                                            </div>
                                            
                                            <div class="form-group">
                                                <label class="sr-only">Email</label>
                                                <input type="text" class="form-control" placeholder="email id"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="name">Subject</label>
                                                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                <div class="validate"></div>
                                            </div>
                                            <div class="form-group">
                                                <label for="name">Message</label>
                                                <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
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
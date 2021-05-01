import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Report.css';


export default class Report extends React.Component {
    render() {
        return (
            <div>
                 <div class="container search-table">
            <div class="search-box">
                <div class="row">
                    <div class="col-md-3">
                        <h5>Search All Fields</h5>
                    </div>
                    <div class="col-md-9">
                        <input type="text" id="myInput" onkeyup="myFunction()" class="form-control" placeholder="Search all fields e.g. HTML"/>
                       
                    </div> 
                </div>
            </div>
            <div class="search-list">
                <h3>These Records Found</h3>
                <table class="table" id="myTable">
                    <thead>
                        <tr>
                            <th>Name of the faculty</th>
                            <th>Certificate</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    
                    <tr>
                        <td>Deeksha</td>
                        <td>Web Development</td>
                    </tr>
                    <tr>
                        <td>honey</td>
                        <td>Web Development</td>
                    </tr>
                    <tr>
                        <td>Raju</td>
                        <td>Programming Language</td>
                    </tr>
                    <tr>
                        <td>LAllu</td>
                        <td>Web Development</td>
                    </tr>
                    <tr>
                        <td>Tillu</td>
                        <td>Web Design</td>
                    </tr>
                    <tr>
                        <td>yoyo</td>
                        <td>Programming Language</td>
                    </tr>
                    <tr>
                        <td>Arha</td>
                        <td>App Development</td>
                    </tr>
                    <tr>
                        <td>Jaus</td>
                        <td>Web Delopment</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
            
                   

                
            </div>
        )
    }
}
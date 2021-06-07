import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminComplaintBox.css";
import AdminHeader from "../AdminHeader";

export default class AdminComplaintBox extends React.Component {
  state = {
    list: [],
  };

  classAPI() {
    fetch("http://localhost:9000/adminAPI/complaint")
      .then((res) => res.json())
      .then((res) => this.setState({ list: res }));
  }

  componentWillMount() {
    this.classAPI();
  }

  renderValues() {
    return this.state.list.map((value) => (
      <tr>
        <td width="20%">{value.name}</td>
        <td width="20%">{value.rollno}</td>
        <td width="20%">{value.subject}</td>
        <td width="20%">{value.message}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div class="container">
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />

        <div class="section-title" data-aos="fade-up">
          <h1>View Complaints</h1>
          <hr />
        </div>
        <table class="table table-hover">
          <tr>
            <td width="20%">
              <b> Name</b>
            </td>
            <td width="20%">
              <b>Roll Number</b>
            </td>
            <td width="20%">
              <b>Subject </b>
            </td>
            <td width="20%">
              <b>Message</b>
            </td>
          </tr>
          {this.renderValues()}
        </table>
      </div>
    );
  }
}

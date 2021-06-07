import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default class Workshops extends React.Component {
  state = {
    list: [],
  };

  classAPI() {
    fetch("http://localhost:9000/mainWebsiteAPI/workshop_year2")
      .then((res) => res.json())
      .then((res) => this.setState({ list: res }));
  }

  componentWillMount() {
    this.classAPI();
  }

  renderValues() {
    return this.state.list.map((value) => (
      <tr>
        {" "}
        <td width="20%">{value.faculty_name}</td>
        <td width="20%">{value.title}</td>
        <td width="20%">{value.domain}</td>
        <td width="20%">{value.from_date}</td>
        <td width="20%">{value.to}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div class="container">
        <br />
        <br />
        <br />
        <br />

        <div class="section-title" data-aos="fade-up">
          <h1>Workshops held in 2020</h1>
          <hr />
        </div>

        <table class="table table-hover">
          <tr>
            <td width="20%">
              <b>Faculty Name</b>
            </td>
            <td width="20%">
              <b>Title</b>
            </td>
            <td width="20%">
              <b>Domain </b>
            </td>
            <td width="20%">
              <b>Start Date</b>
            </td>
            <td width="20%">
              <b>End Date</b>
            </td>
          </tr>

          {this.renderValues()}
        </table>
      </div>
    );
  }
}
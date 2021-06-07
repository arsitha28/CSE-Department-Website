import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./research.css";

export default class Research_year extends React.Component {
  state = {
    list: [],
  };

  classAPI() {
    fetch("http://localhost:9000/mainWebsiteAPI/research_year1")
      .then((res) => res.json())
      .then((res) => this.setState({ list: res }));
  }

  componentWillMount() {
    this.classAPI();
  }

  renderValues() {
    return this.state.list.map((value) => (
      <tr>
        <td width="20%">{value.faculty_name}</td>
        <td width="20%">{value.paper}</td>
        <td width="20%">{value.domain}</td>
        <td width="20%">{value.publisher}</td>
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
          <h1>Research in 2021</h1>
          <hr />
        </div>
        <table class="table table-hover">
          <tr>
            <td width="20%">
              <b>Faculty Name</b>
            </td>
            <td width="20%">
              <b>Title of paper</b>
            </td>
            <td width="20%">
              <b>Domain </b>
            </td>
            <td width="20%">
              <b>publisher</b>
            </td>
          </tr>
          {this.renderValues()}
        </table>
      </div>
    );
  }
}

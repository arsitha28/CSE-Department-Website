import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./alumni.css";

export default class Alumni extends React.Component {
  state = {
    AlumniList: [],
  };

  classAPI() {
    fetch("http://localhost:9000/mainWebsiteAPI/alumni")
      .then((res) => res.json())
      .then((res) => this.setState({ AlumniList: res }));
  }

  componentWillMount() {
    this.classAPI();
  }

  renderValues() {
    return this.state.AlumniList.map((value) => (
      <tr>
        <td width="20%">{value.name}</td>
        <td width="20%">{value.branch}</td>
        <td width="20%">{value.year}</td>
        <td width="20%">{value.currentlyPursuing}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div class="container">
        <br />
        <br />
        <br />
        <div class="section-title" data-aos="fade-up">
          <h1>Alumni</h1>
          <hr />
        </div>
        <table class="table table-hover">
          <tr>
            <td width="20%">
              <b> Name</b>
            </td>
            <td width="20%">
              <b>Branch</b>
            </td>
            <td width="20%">
              <b>Year of passing out </b>
            </td>
            <td width="20%">
              <b>Currently pursuing</b>
            </td>
          </tr>
          {this.renderValues()}
        </table>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

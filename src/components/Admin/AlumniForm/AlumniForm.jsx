import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminHeader from "../AdminHeader";

export default class AlumniForm extends React.Component {
  state = {
    name: "",
    branch: "",
    year: "",
    currentlyPursuing: "",
    response: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/adminAPI/alumni", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: [
          this.state.name,
          this.state.branch,
          this.state.year,
          this.state.currentlyPursuing,
        ],
      }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
    alert("entry recorded");
  };

  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />

        <br />
        <div class="section-title" data-aos="fade-up">
          <h3>Add alumni entry</h3>
          <hr />
        </div>
        <div class="container">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="inputname">Name</label>
              <input
                type="text"
                class="form-control"
                id="inputname"
                placeholder="Name"
                value={this.state.post}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="inputBranch">Branch</label>
              <input
                type="text"
                class="form-control"
                id="inputBranch"
                placeholder="Branch"
                value={this.state.post}
                onChange={(e) => this.setState({ branch: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="inputyear">Pass out year</label>
              <input
                type="text"
                class="form-control"
                id="inputyear"
                placeholder="Pass out year"
                value={this.state.post}
                onChange={(e) => this.setState({ year: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="inputCurrentlyPursuing">Currently Pursuing</label>
              <input
                type="text"
                class="form-control"
                id="inputCurrentlyPursuing"
                placeholder="CurrentlyPursuing"
                value={this.state.post}
                onChange={(e) =>
                  this.setState({ currentlyPursuing: e.target.value })
                }
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

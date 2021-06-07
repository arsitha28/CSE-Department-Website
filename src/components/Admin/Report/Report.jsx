import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Report.css";
import AdminHeader from "../AdminHeader";

export default class Report extends React.Component {
  state = {
    search_workshop: "",
    search_research: "",
    search_certificate: "",
    responseToPostWorkshop: [],
    responseToPostResearch: [],
    responseToPostCertificate: [],
  };

  renderCertification() {
    return this.state.responseToPostCertificate.map((value) => (
      <tr>
        <td width="50%">{value.Name}</td>
        <td width="50%">{value.certificate}</td>
      </tr>
    ));
  }

  renderResearch() {
    return this.state.responseToPostResearch.map((value) => (
      <tr>
        <td width="25%">{value.faculty_name}</td>
        <td width="25%">{value.paper}</td>
        <td width="25%">{value.domain}</td>
        <td width="25%">{value.publisher}</td>
      </tr>
    ));
  }

  renderWorkshops() {
    return this.state.responseToPostWorkshop.map((value) => (
      <tr>
        <td width="33%">{value.faculty_name}</td>
        <td width="33%">{value.title}</td>
        <td width="33%">{value.domain}</td>
      </tr>
    ));
  }

  handleSubmitWorkshop = async (e) => {
    e.preventDefault();
    const response = await fetch("/adminAPI/report_workshop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: [this.state.search_workshop] }),
    });
    const body = await response.json();
    this.setState({ responseToPostWorkshop: body });
  };

  handleSubmitResearch = async (e) => {
    e.preventDefault();
    const response = await fetch("/adminAPI/report_research", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: [this.state.search_research] }),
    });
    const body = await response.json();
    this.setState({ responseToPostResearch: body });
  };

  handleSubmitCertificate = async (e) => {
    e.preventDefault();
    const response = await fetch("/adminAPI/report_certificate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: [this.state.search_certificate] }),
    });
    const body = await response.json();
    this.setState({ responseToPostCertificate: body });
  };

  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />

        <div class="section-title" data-aos="fade-up">
          <h1>Search</h1>
          <hr />
        </div>
        <div class="container search-table">
          <div class="search-box">
            <div class="row">
              <div class="col-md-3">
                <h5>Search workshops based on year</h5>
              </div>
              <div class="col-md-9">
                <form onSubmit={this.handleSubmitWorkshop}>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.post}
                    onChange={(e) =>
                      this.setState({ search_workshop: e.target.value })
                    }
                    placeholder="Search year"
                  />
                  <br />

                  <button type="submit" class="btn btn-outline-success">
                    SEARCH
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="search-list">
            <h3>These Records Found</h3>
            <table class="table" id="myTable">
              <tr>
                <td width="33%">
                  <b>Faculty name</b>
                </td>
                <td width="33%">
                  <b>Title</b>
                </td>
                <td width="33%">
                  <b>Domain</b>
                </td>
              </tr>

              {this.renderWorkshops()}
            </table>
          </div>
        </div>
        <div class="container search-table">
          <div class="search-box">
            <div class="row">
              <div class="col-md-3">
                <h5>Search research based on year</h5>
              </div>
              <div class="col-md-9">
                <form onSubmit={this.handleSubmitResearch}>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.post}
                    onChange={(e) =>
                      this.setState({ search_research: e.target.value })
                    }
                    placeholder="Search year"
                  />
                  <br />

                  <button type="submit" class="btn btn-outline-success">
                    SEARCH
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="search-list">
            <h3>These Records Found</h3>
            <table class="table" id="myTable">
              <tr>
                <td width="25%">
                  <b>Faculty name</b>
                </td>
                <td width="25%">
                  <b>Title of paper</b>
                </td>
                <td width="25%">
                  <b>Domain</b>
                </td>
                <td width="25%">
                  <b>Publisher</b>
                </td>
              </tr>

              {this.renderResearch()}
            </table>
          </div>
        </div>
        <div class="container search-table">
          <div class="search-box">
            <div class="row">
              <div class="col-md-3">
                <h5>Search based on certifications</h5>
              </div>
              <div class="col-md-9">
                <form onSubmit={this.handleSubmitCertificate}>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.post}
                    onChange={(e) =>
                      this.setState({ search_certificate: e.target.value })
                    }
                    placeholder="Search certificates"
                  />
                  <br />

                  <button type="submit" class="btn btn-outline-success">
                    SEARCH
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="search-list">
            <h3>These Records Found</h3>
            <table class="table" id="myTable">
              <tr>
                <td width="50%">
                  <b> Name</b>
                </td>
                <td width="50%">
                  <b>Certification</b>
                </td>
              </tr>

              {this.renderCertification()}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

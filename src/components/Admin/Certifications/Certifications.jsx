import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./certifications.css";

export default class Certifications extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div class="container">
          <div class="row gutters">
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div class="user-avatar"></div>
                      <h4 class="user-name">Faculty Name</h4>

                      <h6 class="user-email">faculty@gmail.com</h6>
                    </div>
                  </div>

                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h2 class="mb-2 text-primary">CERTIFICATIONS </h2>
                    </div>
                  </div>

                  <div class="row gutters">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <h5>Full Stack Web Development</h5>
                      </div>
                    </div>
                  </div>
                  <div class="row gutters">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <h5>Java</h5>
                        <hr />
                      </div>
                    </div>
                  </div>

                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div id="accordion" class="accordion">
                        <div class="card mb-0">
                          <div
                            class="card-header collapsed"
                            data-toggle="collapse"
                            href="#collapseOne"
                          >
                            <a class="card-title">Add Certifications</a>
                          </div>
                          <div
                            id="collapseOne"
                            class="card-body collapse"
                            data-parent="#accordion"
                            style={{ marginLeft: "40px" }}
                          >
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div class="form-group">
                                <label for="Street"> Certificate Name : </label>
                                <input
                                  type="name"
                                  class="form-control"
                                  id="Street"
                                  placeholder="Enter certificate name"
                                />
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div
                                class="form-group"
                                style={{ marginTop: "40px" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div class="text-right">
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-secondary"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-primary"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

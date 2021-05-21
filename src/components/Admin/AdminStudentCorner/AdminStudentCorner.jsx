import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class AdmintudentCorner extends React.Component {
    render() {
        return (
            <div>

              <br/>
              <br/>
              <br/>
              <br/>


              <div class="container">
              <div class="container">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label class="form-check-label" for="inlineRadio1">I Year</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">II Year</label>
              </div>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label class="form-check-label" for="inlineRadio1">III Year</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">IV Year</label>
              </div>


              <br/>






                            
                  <div class="col-md-4"></div>
                  <div class="col-md-4">
                      <form method="post" enctype="multipart/form-data">
                        <p>Accademic Calanders :
                        <input type="file" id="files" name="files" multiple="multiple" />
                        </p>

                        <p>Course Files :
                        <input type="file" id="files" name="files" multiple="multiple" />
                        </p>

                        <p>Time Table for CSE-A :
                        <input type="file" id="files" name="files" multiple="multiple" />
                        </p>

                        <p>Time Table for CSE-B :
                        <input type="file" id="files" name="files" multiple="multiple" />
                        </p>

                        <p>Time Table for CSE-C :
                        <input type="file" id="files" name="files" multiple="multiple" />
                        </p>

                        <p>Time Table for CSE-D :
                        <input type="file" id="files" name="files" multiple="multiple" />
                        </p>

                        <p>Time Table for CSE-E :
                        <input type="file" id="files" name="files" multiple="multiple" />
                        </p>






                          <p >
                              <input type="submit" value="Upload Files" class="btn btn-lg btn-primary" />
                          </p>
                      </form>
                  </div>
                  <div class="col-md-4"></div>
              </div>



              </div>

 
                
            </div>
        )
    }
}
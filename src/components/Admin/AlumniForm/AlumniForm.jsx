import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class AlumniForm extends React.Component {
    render() {
        return (
            <div>

<div class="container">
              <form>
    <div class="form-group">
        <label for="inputname">Name</label>
        <input type="text" class="form-control" id="inputname" placeholder="Name"/>
    </div>
    <div class="form-group">
        <label for="inputBranch">Branch</label>
        <input type="text" class="form-control" id="inputBranch" placeholder="Branch"/>
    </div>
    <div class="form-group">
        <label for="inputyear">Pass out year</label>
        <input type="text" class="form-control" id="inputyear" placeholder="Pass out year"/>
    </div>
    <div class="form-group">
        <label for="inputCurrentlyPursuing">Currently Pursuing</label>
        <input type="text" class="form-control" id="inputCurrentlyPursuing" placeholder="CurrentlyPursuing"/>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>           
                
                
            </div>
        )
    }
}
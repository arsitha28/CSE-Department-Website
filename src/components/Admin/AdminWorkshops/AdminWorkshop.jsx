import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminWorkshop.css';


export default class AdminWorkshop extends React.Component {
    render() {
        return (
            <div>
              
             
              <div class="col-sm-4 col-sm-8 ">
              <a class="btn btn-large btn-primary" href="#secA"><i class="fa fa-plus"></i> ADD NEW</a>
              </div>




              
    <table class="table table-responsive table-bordered table-striped table-hover  table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
  <tr>
      <th>Serial No</th>
      <th>Faculty Name</th>
      <th>Title</th>
      <th>Domain</th>
      <th>Duration</th>
      <th>Operation</th>
  </tr>
  <tr>
      <td>1</td>
      <td>Varun</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        Iot
      </td>
      <td>From 1-2-2021 to 3-2-2021</td>
      <td>
     
      <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"> </i></a>
      <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">  </i></a>

      </td>
  </tr>

  <tr>
      <td>2</td>
      <td>Krishna</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        ML
      </td>
      <td>From 12-2-2021 to 5-2-2021</td>
      <td>
							
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"> </i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">  </i></a>

                        </td>
  </tr>

  <tr>
      <td>3</td>
      <td>Teja</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        AI
      </td>
      <td>From 31-6-2021 to 3-7-2021</td>
      <td>
							
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>

                        </td>
  </tr>

  <tr>
      <td>4</td>
      <td>Bhavani</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        Security
      </td>
      <td>From 1-2-2021 to 3-2-2021</td>
      <td>
							
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>

                        </td>
  </tr>

  <tr>
      <td>5</td>
      <td>Madhav</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        huewx bgyuiokgbbbbbb
      </td>
      <td>From 1-2-2021 to 3-2-2021</td>
      <td>
							
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>

                        </td>
  </tr>

  <tr>
      <td>6</td>
      <td>Ravi shankar</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        Iot
      </td>
      <td>From 1-2-2021 to 3-2-2021</td>
      <td>
							
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>

                        </td>
  </tr>
  
</table>


<section id="secA">
    


             
<form class="form-inline">

<label for="Faculty Name" class="mr-sm-2">Faculty Name:</label>
  <input type="text" class="form-control mb-2 mr-sm-5" placeholder="Enter Faculty Name" id="Faculty Name"/>

  <label for="Titled" class="mr-sm-2">Title:</label>
  <input type="text" class="form-control mb-2 mr-sm-5" placeholder="Enter Title" id="Title"/>

  <label for="Domain" class="mr-sm-2">Domain:</label>
  <input type="text" class="form-control mb-2 mr-sm-5" placeholder="Enter Domain" id="Domain"/>

  <label for="Duration" class="mr-sm-2">Duration:</label>
  <input type="text" class="form-control mb-2 mr-sm-5" placeholder="Enter Duration" id="Duration"/>
  <button type="button" class="btn btn-outline-success">ADD</button>

  </form>
  
  </section>



            </div>
        )
    }
}
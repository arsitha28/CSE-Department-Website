import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class AdminResearch extends React.Component {
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
      <th>Papers Published</th>
      <th>Domain</th>
      <th>Publisher</th>
      <th>Operation</th>
  </tr>
  <tr>
      <td>1</td>
      <td>Lallu</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        Iot
      </td>
      <td>Mypublisher.com</td>
      <td>
     
     <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"> </i></a>
     <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">  </i></a>

     </td>
  </tr>

  <tr>
      <td>2</td>
      <td>Lallu</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        Iot
      </td>
      <td>Mypublisher.com</td>
      <td>
     
     <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"> </i></a>
     <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">  </i></a>

     </td>
  </tr>

  <tr>
      <td>3</td>
      <td>Lallu</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        Iot
      </td>
      <td>Mypublisher.com</td>
      <td>
     
     <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"> </i></a>
     <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">  </i></a>

     </td>
  </tr>

  <tr>
      <td>4</td>
      <td>Lallu</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        Iot
      </td>
      <td>Mypublisher.com</td>
      <td>
     
     <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"> </i></a>
     <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">  </i></a>

     </td>
  </tr>

  <tr>
      <td>5</td>
      <td>Lallu</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        Iot
      </td>
      <td>Mypublisher.com</td>
      <td>
     
     <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"> </i></a>
     <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">  </i></a>

     </td>
  </tr>

  <tr>
      <td>6</td>
      <td>Lallu</td>
      <td>IOT based application to send the messages immediately as soon as they want to send any information to anyone,anytime. when ever we want</td>
      <td>
        Iot
      </td>
      <td>Mypublisher.com</td>
      <td>
     
     <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"> </i></a>
     <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">  </i></a>

     </td>
  </tr>
  
</table>
     


<section id="secA">
    


             
    <form class="form-inline">
    
    <label for="Faculty Name" class="mr-sm-2">Faculty Name:</label>
      <input type="text" class="form-control mb-2 mr-sm-5" placeholder="Enter Faculty Name" id="Faculty Name"/>
    
      <label for="Paper Published" class="mr-sm-2">Paper Published:</label>
      <input type="text" class="form-control mb-2 mr-sm-5" placeholder="Enter Paper Published" id="Paper Published"/>
    
      <label for="Domain" class="mr-sm-2">Domain:</label>
      <input type="text" class="form-control mb-2 mr-sm-5" placeholder="Enter Domain" id="Domain"/>
    
      <label for="Publisher" class="mr-sm-2">Publisher:</label>
      <input type="text" class="form-control mb-2 mr-sm-5" placeholder="Enter Publisher" id="Publisher"/>
      <button type="button" class="btn btn-outline-success">ADD NEW ENTRY</button>
    
      </form>
      
      </section>




                
            </div>
        )
    }
}
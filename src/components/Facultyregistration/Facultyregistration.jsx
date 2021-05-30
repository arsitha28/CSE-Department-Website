import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registration.css';



export default class Facultyregistration extends React.Component {
    render() {
        return (
            <div class="registration">
                 <div class="card card-container">
                    
                    <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" class="profile-name-card"></p>
                    <form class="form-signup">
                        <span id="reauth-name" class="reauth-name"></span>
                        <input type="text" id="inputfacultyname" class="form-control" placeholder="Faculty Name" required autofocus/>
                        <input type="text" id="inputfacultyemail" class="form-control" placeholder="CVR Email id" required autofocus/>
                        <input type="text" id="inputusername" class="form-control" placeholder="User Name" required autofocus/>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        
                        <button class="btn btn-lg btn-primary btn-block btn-signup" type="submit">Sign up</button>
                    </form>
                    
                </div>
            

            </div>
        )
    }
}
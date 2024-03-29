import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';


export default class Login extends React.Component {
    render() {
        return (
            <div class="login">
                 <div class="card card-container">
                    
                    <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" class="profile-name-card"></p>
                    <form class="form-signin">
                        <span id="reauth-name" class="reauth-name"></span>
                        <input type="text" id="inputusername" class="form-control" placeholder="User Name" required autofocus/>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        <div id="remember" class="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                    </form>
                    <a href="#" class="forgot-password">
                        Forgot the password?
                    </a>
                </div>
            

            </div>
        )
    }
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './facultylogin.css';
import { Redirect } from 'react-router-dom';

export default class FacultyLogin extends React.Component {
    
    
    constructor(props)
    {
        super(props)

        let loggedIn = true

        const token = localStorage.getItem("token")

        if(token == null)
        {
            loggedIn = false
        }

        this.state={
            username:'',
            password:'',
            loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e)
    {
        this.setState(
            {
                [e.target.name]:e.target.value
            })
    }

    submitForm(e)
    {
        e.preventDefault()
        
        const{ username, password } = this.state
        if(username == "cse" && password == "dept")
        {
            localStorage.setItem("token","csedepartmenttoken")
            this.setState({
                loggedIn: true
            })
        }
        
    }
    render() {

        if(this.state.loggedIn)
        {
            return <Redirect to="/faculty/Certifications"/>
        }
        return (
            <div class="login">
                 <div class="card card-container">
                    
                    <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" class="profile-name-card"></p>
                    <form class="form-signin" onSubmit={this.submitForm}>
                        <span id="reauth-name" class="reauth-name"></span>
                        <input type="text" name="username" class="form-control" placeholder="username" value={this.state.username} onChange={this.onChange} required autofocus/>
                        <input type="password" name="password" class="form-control" placeholder="Password" value={this.state.password} onChange={this.onChange} required/>
                        
                        <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Login</button>
                    </form>
                    
                </div>
            

            </div>
        )
    }
}
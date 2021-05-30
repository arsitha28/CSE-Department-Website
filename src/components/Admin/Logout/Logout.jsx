import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Redirect } from 'react-router-dom'


export default class Logout extends React.Component {
    constructor(props)
    {
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>  
                        
                    <h1> Logged Out </h1> 
                    <Link to="/admin/login" style={{color:"black",width:"80px",height:"40px"}}> click here login again </Link>
            </div>
            )
        }
    }
    
    
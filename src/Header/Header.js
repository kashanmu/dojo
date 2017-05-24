//import React from "react";
import React, { Component } from 'react';
import "./Header.css";
import {Link} from 'react-router-dom'
import Login from "../Components/Login/Login.js";

class Header extends React.Component{

     logOut1 = ()=> {
   //       console.log ("You are in Logout action");
        localStorage.removeItem ("jw-token");
        localStorage.removeItem("username","");
//        localStorage.setItem("user","")
        this.props.history.push("/login");
    }

     render(){
        return (
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
     <div className="navbar-header">
      <a className="navbar-brand" href="#">
         </a>
    </div>

     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
         <div className="col-sm-10">
            <ul className="nav navbar-nav">
                        <li>
                                <Link to="/post">Add User (User Reg)</Link>
                            </li>
                            <li>
                                <Link to="/login">User Login</Link>
                            </li> 
                </ul>
            </div>
             {localStorage.getItem("jw-token") !== null&&
            <div className="col-sm-2">
                <input type="button" className="btn btn-primary" value="Logout" onClick={this.logOut1} /> 
            </div>
            }
     </div>
  </div>
</nav>


        )
    }
}
export default Header
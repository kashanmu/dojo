import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'
class Header extends React.Component{
     render(){
        return (
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
     <div className="navbar-header">
      <a className="navbar-brand" href="#">
         </a>
    </div>

     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
                 <li>
                        <Link to="/post">Add User (User Reg)</Link>
                    </li>
                    <li>
                        <Link to="/login">User Login</Link>
                    </li> 
         </ul>
     </div>
  </div>
</nav>


        )
    }
}
export default Header
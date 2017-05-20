import React, { Component } from 'react';
import Axios from 'axios';
import "./Dashboard.css";
import Posts from "./Posts.js";

class Dashboard extends Component {
      constructor(props){
        super(props);
     }

     logOut = ()=> {
         console.log ("You are in Logout action");
        localStorage.setItem("jw-token", "");
        localStorage.setItem("username","");
        localStorage.setItem("user","")
        this.props.history.push("/login");
    }

  render() {
      return(
          <div className="container">
              <div className="row">
                  <div className="col-sm-10"><h1>The Wall Example </h1></div>
                  <div className="col-sm-2"> <input type="button" className="btn btn-primary" value="Logout" onClick={this.logOut} /> </div>
              </div>
              <hr />
              <div className="row">
                  <h2> Welcome {localStorage.getItem("username")} {console.log(this.props.match.params.userid)}</h2>
              </div>
              <div className="wallheading"> The Wall</div>
              <div className="row"> <Posts userid={this.props.match.params.userid}/> </div>
          </div>
      )
  }
  }

  export default Dashboard;
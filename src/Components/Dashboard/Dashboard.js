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

   authenticate = () => {
           Axios.get(" http://54.245.42.196/users/"+this.props.match.params.userid+"/authenticate" , 
       {headers: {Authorization:localStorage.getItem("jw-token")} },
       {
           // cancelToken: this.cancelToken.token
        }).then((result) => {
            localStorage.setItem("authenticateduser",result.data.user._id)
            localStorage.setItem("username", result.data.user.username);
           // return result.data.user._id;
            //console.log(result.data.user);
         }).catch((err) => {
            localStorage.setItem("authenticateduser","false");
        })

     }

  render() {
        this.authenticate();
        console.log(localStorage.getItem("authenticateduser")+":"+this.props.match.params.userid)
         if (localStorage.getItem("authenticateduser") === this.props.match.params.userid) {
 
         
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10"><h1>The Wall Example </h1></div>
                        <div className="col-sm-2"> <input type="button" className="btn btn-primary" value="Logout" onClick={this.logOut} /> </div>
                    </div>
                    <hr />
                    <div className="row">
                        <h2> Welcome {localStorage.getItem("username")} </h2>
                    </div>
                    <div className="wallheading"> The Wall</div>
                    <div className="row"> <Posts userid={this.props.match.params.userid}/> </div>
                </div>
            )
        }
        
        else {
            return(
                <div>
                  {this.logOut()}
                 </div>
            )
        } 
  }
  }

  export default Dashboard;
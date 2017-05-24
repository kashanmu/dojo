import React, { Component } from 'react';
import Axios from 'axios';
import "./Dashboard.css";
import Posts from "./Posts.js";

class Dashboard extends Component {
      constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {authenticated: false}
     }

     logOut = ()=> {
   //       console.log ("You are in Logout action");
        localStorage.removeItem ("jw-token");
        localStorage.removeItem("username","");
//        localStorage.setItem("user","")
        this.props.history.push("/login");
    }

    componentWillUnmount(){
        this.cancelToken.cancel("Operation canceled by the user");
    }

   authenticate = () => {
 
           Axios.get(" http://54.245.42.196/users/"+this.props.match.params.userid+"/authenticate" , 
       {headers: {Authorization:localStorage.getItem("jw-token")} },
       {
           // cancelToken: this.cancelToken.token
        }).then((result) => {
 //          localStorage.setItem("authenticateduser",result.data.user._id);
            localStorage.setItem("username", result.data.user.username);
           // return result.data.user._id;
           this.setState({
               authenticated: result.data.user._id
           })
            console.log("Inside authenticate "+result.data.user._id);
         }).catch((err) => {
            localStorage.setItem("authenticateduser","false");
            this.logOut()
        })


     }

componentDidMount(){
    this.authenticate();
}

  render() {
       // this.authenticate();
       console.log ("Inside render:"+this.state.authenticated)
       // console.log(localStorage.getItem("authenticateduser")+":"+this.props.match.params.userid)
      //   if (localStorage.getItem("authenticateduser") === this.props.match.params.userid) {
   if (this.state.authenticated === this.props.match.params.userid) {
         
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10"><h1>The Wall Example </h1></div>
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
                  <h1>Loading</h1>
                 </div>
            )
        } 
  }
  }

  export default Dashboard;
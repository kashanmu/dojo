import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header/Header.js"
import Get from "./Components/Get/Get.js";
import GetStarWars from "./Components/GetStarWars/GetStarWars.js";
import Post from "./Components/Post/Post.js";
import Users from "./Components/Users/Users.js";
import Login from "./Components/Login/Login.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Get} />
          <Route path="/film" component={GetStarWars} />
          <Route path="/post" component={Post} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />

        </div>
      </BrowserRouter>
    );
  }
}
export default App

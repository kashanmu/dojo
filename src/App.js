import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header/Header.js"
import Post from "./Components/Post/Post.js";
import Login from "./Components/Login/Login.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Header} />
          <Route exact path="/" component={Login} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/login" component={Login} />
           <Route exact path="/dashboard/:userid" component={Dashboard} />

        </div>
      </BrowserRouter>
    );
  }
} 

export default App

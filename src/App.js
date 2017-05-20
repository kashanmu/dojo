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
          <Header />
          <Route exact path="/" component={Login} />
          <Route path="/post" component={Post} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard/:userid" component={Dashboard} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App

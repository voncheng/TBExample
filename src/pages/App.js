import React, { Component } from "react";
import { RootRouteConnect } from "tomatobean";

import "./App.css";

@RootRouteConnect
export default class App extends Component {
  render () {
    return (
      <div className="app-container">
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Welcome to Tomatobean</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

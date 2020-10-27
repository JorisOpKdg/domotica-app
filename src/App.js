import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import StartPage from "./components/layout/StartPage";
import FloorList from "./components/FloorList";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <body>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/floor-list/:id" component={FloorList} />
            <Route path="/" component={StartPage} />
          </Switch>
        </BrowserRouter>
      </body>
    );
  }
}

export default App;

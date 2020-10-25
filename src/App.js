import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoomsListView from "./components/RoomsListView";
import RoomsMapView from "./components/RoomsMapView";
import RoomDetailView from "./components/RoomDetailView";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <body>
        <Router>
          <Navbar />
          <div className="content">
            <Switch>
              <Route
                path="/detail/:floorId/:roomId"
                component={RoomDetailView}
              />
              <Route path="/map/:floorId" component={RoomsMapView} />
              <Route path="/:floorId" component={RoomsListView} />
              <Route path="/" component={RoomsListView} />
            </Switch>
          </div>
        </Router>
      </body>
    );
  }
}

export default App;

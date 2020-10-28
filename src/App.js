import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import StartPage from "./components/layout/StartPage";
import RoomsList from "./components/rooms/RoomsList";
import RoomsMap from "./components/rooms/RoomsMap";
import RoomDetail from "./components/rooms/RoomDetail";


class App extends Component {
  state = {};
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/rooms-list/:floorId" component={RoomsList} />
            <Route path="/rooms-map/:floorId" component={RoomsMap} />
            <Route path="/room-detail/:floorId/:roomId" component={RoomDetail} />
            <Route path="/" component={StartPage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

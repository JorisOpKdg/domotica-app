import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import StartPage from "./components/layout/StartPage";
import RoomsList from "./components/rooms/RoomsList";
import RoomsMap from "./components/rooms/RoomsMap";
import RoomDetail from "./components/rooms/RoomDetail";
import Settings from "./components/Settings";
import Footer from "./components/layout/Footer";
import ThemeContextProvider from "./contexts/ThemeContext";
import NewServiceScheme from "./components/services/schemes/NewServiceScheme";
import {
  homeRoute,
  settingsRoute,
  roomsListRoute,
  roomsMapRoute,
  roomDetailRoute,
  newServiceSchemeRoute,
} from "./routes";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <ThemeContextProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path={homeRoute} component={StartPage} />
              <Route path={roomsListRoute} component={RoomsList} />
              <Route path={roomsMapRoute} component={RoomsMap} />
              <Route path={roomDetailRoute} component={RoomDetail} />
              <Route path={newServiceSchemeRoute}component={NewServiceScheme}/>
              <Route path={settingsRoute} component={Settings} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </ThemeContextProvider>
      </>
    );
  }
}

export default App;

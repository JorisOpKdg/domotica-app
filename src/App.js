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

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <ThemeContextProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/new-smart-scheme" component={NewServiceScheme} />
              <Route path="/settings" component={Settings} />
              <Route path="/rooms-list/:floorId" component={RoomsList} />
              <Route path="/rooms-map/:floorId" component={RoomsMap} />
              <Route
                path="/room-detail/:floorId/:roomId"
                component={RoomDetail}
              />
              <Route path="/" component={StartPage} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </ThemeContextProvider>
      </>
    );
  }
}

export default App;

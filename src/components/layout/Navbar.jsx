import React, { Component } from "react";

class Navbar extends Component {
  state = {
    floors: [],
  };

  componentDidMount() {
    this.setState({
      floors: [
        { id: 1, name: "Kelder" },
        { id: 2, name: "Woonkamer" },
        { id: 3, name: "1e verdiep" },
        { id: 4, name: "Zolder" },
      ],
    });
  }

  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <a href="/">Domotica App</a>
        </h5>

        <nav className="my-2 my-md-0 mr-md-3">
          {this.state.floors &&
            this.state.floors.map((floor) => (
              <a className="p-2 text-dark" href={`/rooms-list/${floor.id}`}>
                {floor.name}
              </a>
            ))}
        </nav>
      </div>
    );
  }
}

export default Navbar;

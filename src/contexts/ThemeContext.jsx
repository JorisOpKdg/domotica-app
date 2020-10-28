import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: "",
    dark: "",
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
          {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

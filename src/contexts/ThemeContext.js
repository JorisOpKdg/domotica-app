import React, { createContext, Component } from "react";

// Dit is een voorbeeld van een class component zonder hooks
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: {
      nav: "light",
      bg: "white",
      logo: "light",
      btn: "dark",
      text: "black",
    },
    dark: {
      nav: "dark",
      bg: "dark",
      logo: "dark",
      btn: "light",
      text: "white",
    },
    showTemperature: true,
    showMusic: true,
    fontSize: 20,
    fontSizeOptions: [12, 14, 16, 18, 20, 22, 24, 30],
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  toggleTemperature = () => {
    this.setState({ showTemperature: !this.state.showTemperature });
  };

  toggleMusic = () => {
    this.setState({ showMusic: !this.state.showMusic });
  };

  setFontSize = (newFontSize) => {
    this.setState({ fontSize: newFontSize });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          toggleTheme: this.toggleTheme,
          setFontSize: this.setFontSize,
          toggleTemperature: this.toggleTemperature,
          toggleMusic: this.toggleMusic,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

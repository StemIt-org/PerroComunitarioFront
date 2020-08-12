import React from "react";

// SCREENS
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./screens/home";

export default class App extends React.Component {
  render() {
    return (
      <>
      <NavbarComponent />
      </>
    );
  }
}

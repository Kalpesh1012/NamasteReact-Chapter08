import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
class Aboutus extends React.Component {
  constructor() {
    super();
    console.log("Parent Class Constructor");
  }
  componentDidMount() {
    console.log("Parent class ComponentDidMount");
  }
  render() {
    console.log("Parent Class render");
    return (
      <>
        <h1>Welcome to the our App khao Piyo and sojao</h1>
        <p>
          We started our app on 26 december 2022 and we offer some amazing food
          for you. This company is started by Kalpesh mahale with the guidance
          of Akshay Saini
        </p>
        <Profile name="First-Child" />
        <Profile name="Second-Child" />
      </>
    );
  }
}
export default Aboutus;

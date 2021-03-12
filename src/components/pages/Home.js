import React, { Component } from "react";
import Header from "../common/Header";
import myImage from "../assets/img/header-bg.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="My Home"
          subtitle="Welcome to my Home"
          showButton={true}
          buttonText="Know About Us!"
          buttonLink="/about"
          image={myImage}
        />
      </div>
    );
  }
}

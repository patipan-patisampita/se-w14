import React, { Component } from "react";

export class User extends Component {
  constructor(props) {
    super(props);
    this.welcome = {
      message: "State in React should be simple",
    };
    this.car = {
      Toyota: "Vios",
      Honda: "Jass",
      Masda: "Masda3",
    };
  }

  animal = {
      cat: "koraj",
      bird: "kayang",
  }

  render() {
    return (
      <div>
        <h1>{this.welcome.message}</h1>
        <h1>Car: {this.car.Honda} {this.car.Toyota} {this.car.Masda}</h1>
        <h1>Animal : {this.animal.cat}</h1>
        <h1>Animal : {this.animal.bird}</h1>
      </div>
    );
  }
}

import React from "react";
import Row from "./row";

export default class Greeting extends React.Component {
  render() {
    return (
      <section>
        <Row label="Name">{this.props.name}</Row>
        <p className="demo">Hello, {this.props.name}!</p>
      </section>
    );
  }
}

import { Component } from "react";
import "./square.css";

class Square extends Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}

export default Square;

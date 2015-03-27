import React from "react";

class Home extends React.Component {
  constructor() {
    this.state = {
      color: "black"
    };
  }

  changeColor() {
    const newColor = Math.floor(Math.random() * 0xffffff).toString(16);

    this.setState({
      color: `#${newColor}`
    });
  }

  render() {
    const styles = { color: this.state.color };

    return (
      <h1 onMouseMove={this.changeColor.bind(this)} style={styles}>
        Howdy from <code>{this.props.path}</code>!
      </h1>
    );
  }
}

export default Home;

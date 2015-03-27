import React from "react";

class Home extends React.Component {
  render() {
    return (
      <h1>Howdy from <code>{this.props.path}</code>!</h1>
    );
  }
}

export default Home;

import React from "react";

class Path extends React.Component {
  render() {
    return <code>{this.context.path}</code>;
  }
}

Path.contextTypes = {
  path: React.PropTypes.string.isRequired
};

export default Path;

import React from "react";
import { cloneWithProps } from "react/addons";

class Context extends React.Component {
  getChildContext() {
    return {
      path: this.props.path
    }
  }

  render() {
    return <this.props.view />
  }
}

Context.childContextTypes = {
  path: React.PropTypes.string.isRequired,
};

export default Context;

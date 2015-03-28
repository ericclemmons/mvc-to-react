import React from "react/addons";

class Context extends React.Component {
  getChildContext() {
    return {
      path: this.props.path
    }
  }

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, React.addons.cloneWithProps)}
      </div>
    );
  }
}

Context.childContextTypes = {
  path: React.PropTypes.string.isRequired,
};

export default Context;

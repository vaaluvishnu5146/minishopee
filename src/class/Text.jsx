import React from "react";

class Text extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.props.label}</p>;
  }
}

export default Text;

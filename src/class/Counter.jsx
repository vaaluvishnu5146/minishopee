import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Counter Application</h1>
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.setState({
                  count: this.state.count - 1,
                });
              }}
            >
              -
            </button>
          </div>
          <div className="col">
            <h3 id="count">{this.state.count}</h3>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                });
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;

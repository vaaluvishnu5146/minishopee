import { useState, useEffect, useReducer } from "react";

function reducer(state = {}, action = {}) {
  if (action.type === "INCREMENT_COUNT") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT_COUNT") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  return state;
}

const INITIAL_STATE = {
  count: 0,
};

export default function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    console.log("Hey");
  }, []);

  useEffect(() => {
    console.log("Count changed", state.count);
  }, [state.count]);

  return (
    <div className="container">
      <h1>Counter Application</h1>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch({ type: "DECREMENT_COUNT" })}
          >
            -
          </button>
        </div>
        <div className="col">
          <h3 id="count">{state.count}</h3>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch({ type: "INCREMENT_COUNT" })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

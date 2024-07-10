import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Counter Application</h1>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
        <div className="col">
          <h3 id="count">{count}</h3>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

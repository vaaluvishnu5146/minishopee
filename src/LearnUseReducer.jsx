import { useReducer, useRef } from "react";

function reducer(state, action) {
  if (action.type === "SWITCH_LIGHTS") {
    return { ...state, light: action.color };
  } else if (action.type === "ADD_IDEA") {
    let ideasCopy = [...state.ideas];
    ideasCopy.push(action.idea);
    return { ...state, ideas: ideasCopy };
  }
  return state;
}

const INITIAL_STATE = {
  ideas: [],
  light: "grey",
};

export default function LearnUseReducer() {
  const ideaInput = useRef(null);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <>
      <div>
        <h3>What is on your mind?</h3>
        <input placeholder="Anything is entertained" ref={ideaInput} />
        <button
          onClick={() =>
            dispatch({ type: "ADD_IDEA", idea: ideaInput.current.value })
          }
        >
          Add
        </button>
      </div>
      <div>
        <div
          style={{
            width: 100,
            height: 100,
            background: state.light,
            borderRadius: "100%",
          }}
        ></div>
        <button
          onClick={() => dispatch({ type: "SWITCH_LIGHTS", color: "red" })}
        >
          Red Light
        </button>
        <button
          onClick={() => dispatch({ type: "SWITCH_LIGHTS", color: "green" })}
        >
          Green Light
        </button>
      </div>
    </>
  );
}

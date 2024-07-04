import { useEffect, useReducer, useRef } from "react";
import LearnUseReducer from "./LearnUseReducer";

function App() {
  // const headingRef = useRef(null);
  // const nameRef = useRef(null);
  // useLayoutEffect(() => {
  //   const heading = document.getElementById("heading");
  //   heading.style.color = "red";
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     headingRef.current.style.color = "green";
  //   }, 5000);
  // }, []);

  return (
    <>
      <LearnUseReducer />
    </>
  );
}

export default App;
// <h1 id="heading" ref={headingRef}>
//         App
//       </h1>
//       <div>
//         <h2>Using Dom</h2>
//         <input id="nameInput" placeholder="Enter you name" />
//         <button
//           onClick={() => {
//             console.log(document.getElementById("nameInput").value);
//           }}
//         >
//           Save
//         </button>
//       </div>
//       <div>
//         <h2>Using useRef</h2>
//         <input placeholder="Enter you name" ref={nameRef} />
//         <button
//           onClick={() => {
//             console.log(nameRef.current.value);
//           }}
//         >
//           Save
//         </button>
//       </div>

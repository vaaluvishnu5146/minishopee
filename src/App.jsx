import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/signup" Component={Signup} />
    </Routes>
  );
}

export default App;

import SignUp from "./SignUp";
import Game from "./Game";
import Private from "./Private";
import ToLogIn from "./ToLogIn";
import ToSignUp from "./ToSignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/ToSignUp" element={<ToSignUp />}></Route>
          <Route path="/ToLogIn" element={<ToLogIn />}></Route>
          <Route path="/Game" element={<Game />}></Route>
          <Route path="/Private" element={<Private />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

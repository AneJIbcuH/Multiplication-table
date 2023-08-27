import SignUp from "./SignUp";
import Game from "./Game";
import Private from "./Private";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="app">

        <Routes>

          <Route path="/" element={<SignUp />}></Route>

          <Route path="/Game" element={<Game />}></Route>

          <Route path="/Private" element={<Private />}></Route>

        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

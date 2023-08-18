import SignUp from "./SignUp";
import Game from "./Game";
import Private from "./Private";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("SignUp");
  const switchPage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="app">
      {page == "SignUp" && <SignUp onChange={switchPage}></SignUp>}

      {page == "Game" && <Game onChange={switchPage}></Game>}

      {page == "Private" && <Private onChange={switchPage}></Private>}
    </div>
  );
}

export default App;

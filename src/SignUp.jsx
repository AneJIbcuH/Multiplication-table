import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import ToLogIn from "./ToLogIn";
import ToSignUp from "./ToSignUp";

function SignUp() {
  const navigateTo = useNavigate();

  useEffect(() => {
    const check = localStorage.getItem("login1");
    if (check) {
      navigateTo("/Private");
    }
  }, []);

  function toSignUp() {
    navigateTo("/ToSignUp");
  }

  function toLogIn() {
    navigateTo("/ToLogIn");
  }

  return (
    <div className="auth">
      <div className="auth_">
        <button className="game_btn" onClick={toSignUp}>
          Зарегистрироваться
        </button>
        <button className="game_btn" onClick={toLogIn}>
          Авторизоваться
        </button>
      </div>
      <Router>
        <Routes>
          <Route path="/ToSignUp" element={<ToSignUp />}></Route>
          <Route path="/ToLogIn" element={<ToLogIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default SignUp;

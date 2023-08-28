import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLogIn } from "./config";

function ToLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const dataLogIn = {
    email: email,
    password: password,
  };

  const authHeader = btoa("Dev:qdprivate");
  const headers = {
    Authorization: `Basic ${authHeader}`,
  };

  function logIn() {
    axios
      .post(apiLogIn, dataLogIn, {
        headers,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.data.access_token);
        localStorage.setItem("login1", dataLogIn.email);
        setEmail("");
        setPassword("");
        console.log(response.data.data.access_token);
        navigateTo("/Game");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="auth">
      <div className="login">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="game_btn" onClick={logIn}>
          Авторизоваться
        </button>
      </div>
    </div>
  );
}

export default ToLogIn;

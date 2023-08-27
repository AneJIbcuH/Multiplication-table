import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ToSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const navigateTo = useNavigate()

  const dataSignUp = {
    name: name,
    email: email,
    password: password,
    password_confirmation: password_confirmation,
  };

  const authHeader = btoa("Dev:qdprivate");
  const headers = {
    Authorization: `Basic ${authHeader}`,
  };

  function signUp() {
    axios
      .post("https://internsapi.public.osora.ru/api/auth/signup", dataSignUp, {
        headers,
      })
      .then((response) => {
        console.log(response.data);
        setName("");
        setEmail("");
        setPassword("");
        setPassword_confirmation("");
        navigateTo('/ToLogIn');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="auth">

        <div className="signUp">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
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
          <input
            type="text"
            placeholder="password_confirmation"
            value={password_confirmation}
            onChange={(event) => setPassword_confirmation(event.target.value)}
          />
          <button className="game_btn" onClick={signUp}>
            Зарегистрироваться
          </button>
        </div>

    </div>
  );
}

export default ToSignUp;
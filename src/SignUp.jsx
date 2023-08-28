import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


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
    </div>
  );
}

export default SignUp;

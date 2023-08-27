import { useNavigate } from 'react-router-dom';

function Private() {
  const navigateTo = useNavigate()

  let allInfo;
  if (localStorage.getItem("allInfo")) {
    allInfo = JSON.parse(localStorage.getItem("allInfo"));
    console.log(allInfo[0]);
  }

  function toGame() {
    navigateTo("/Game");
  }

  return (
    <div className="private">
      <p>Личный кабинет</p>
      <button className="game_btn startgame_btn" onClick={toGame}>
        Играть
      </button>

      {Object.values(allInfo).map((info) => (
        <div className="totalGame">
          <p>Игра №{info.id}</p>
          <p>Правильных ответов:{info.trueAnswers}</p>
          <p>Очки:{info.statistic}</p>
          <p>Дата игры:{info.date}</p>
          <p>Игрок №{info.user_id}</p>
        </div>
      ))}
    </div>
  );
}

export default Private;

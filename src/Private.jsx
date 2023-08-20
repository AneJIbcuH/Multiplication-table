function Private({ onChange }) {
  let allInfo;
  if (localStorage.getItem("allInfo")) {
    allInfo = JSON.parse(localStorage.getItem("allInfo"));
    console.log(allInfo[0]);
  }

  function toGame() {
    onChange("Game");
  }

  return (
    <div className="private">
      <p>Личный кабинет</p>
      <button className="game_btn startgame_btn" onClick={toGame}>
        Играть
      </button>

      {Object.values(allInfo).map((info) => (
        <div className="totalGame">
          <p>Очки:{info.statistic}</p>
          <p>Дата:{info.date}</p>
          <p>Номер пользователя:{info.user_id}</p>
          <p>Номер игры:{info.id}</p>
          <p>Правильных ответов{info.trueAnswers}</p>
        </div>
      ))}
    </div>
  );
}

export default Private;

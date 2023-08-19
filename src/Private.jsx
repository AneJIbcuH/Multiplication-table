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
          <p>SCORE:{info.statistic}</p>
          <p>Date:{info.date}</p>
          <p>User id:{info.user_id}</p>
          <p>Id:{info.id}</p>
          <div className="totalGameP">
            {/* {info.statistic.questions.map((question) => (
              <div>
                <p>{question.question}</p>
                <p>{question.answer}</p>
                <p>{question.current_answer}</p>
              </div>
            ))} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Private;

function Private({ onChange }) {
  let allInfo = localStorage.getItem("allInfo");

  function toGame() {
    onChange("Game");
  }

  return (
    <div className="private">
      <p>tosi bosi</p>
      <button onClick={toGame}>Играть</button>

      {allInfo.map((info) => (
        <div className="totalGame">
          <p>Date:{toDateString(info.date)}</p>
          <p>SCORE:{info.statistic.points}</p>
          <p>END GAME</p>
          <div className="totalGameP">
            <p>Question</p>
            <p>Answer</p>
            <p>Correct</p>
            {info.statistic.questions.map((question) => (
              <div>
                <p>{question.question}</p>
                <p>{question.answer}</p>
                <p>{question.current_answer}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Private;

import { useState} from "react";

function Game({ onChange }) {
  const [info, setInfo] = useState("");

  const access_token = localStorage.getItem("token");
  const headers = {
    "X-Access-Token": `Bearer ${access_token}`,
  };
  const data1 = {
    type_hard: 1,
    type: 1,
  };

  function startGame() {
    axios
      .post("https://internsapi.public.osora.ru/api/game/play", data1, {
        headers,
      })
      .then((response) => {
        setInfo(response.data.data);
        console.log(info);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function nextQuestion(event) {
    if (event.target.value) {
      console.log(event.target.value);

      const data2 = {
        answer: event.target.value,
        type_hard: 1,
        type: 2,
      };

      axios
        .post("https://internsapi.public.osora.ru/api/game/play", data2, {
          headers,
        })
        .then((response) => {
          console.log(response);
          setInfo(response.data.data);
          if (info.questions) {
            let allInfo = []
            let testInfo = {
                date: Date.now(),
                statistic: response.data.data
            }
            allInfo.push(testInfo)
            localStorage.setItem('allInfo', allInfo)
          }
          console.log(info);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function goBack() {
    setInfo("");
  }

  function goPrivate() {
    onChange('Private')
  }

  return (
    <div>
      {!info && (
        <div className="startgame">
          <select>
            <option disabled="disabled" value>
              Выберите сложность
            </option>
            <option value="1">Легко/Easy</option>
            <option value="2">Тяжело/Hard</option>
          </select>
          <button className="game_btn startgame_btn" onClick={startGame}>
            START
          </button>
        </div>
      )}

      {info.time && (
        <div className="game">
          <p>SCORE:{info.points}</p>
          <p>
            TIMER:<a>{info.time}</a>
          </p>
          <p>{info.question}?</p>
          <div onClick={nextQuestion}>
            <button className="game_btn" value={info.options[0]}>
              {info.options[0]}
            </button>
            <button className="game_btn" value={info.options[1]}>
              {info.options[1]}
            </button>
            <button className="game_btn" value={info.options[2]}>
              {info.options[2]}
            </button>
            <button className="game_btn" value={info.options[3]}>
              {info.options[3]}
            </button>
          </div>
          <button className="game_btn-answer game_btn" onClick={goBack}>
            Go Back
          </button>
        </div>
      )}

      {info.questions && (
        <div className="totalGame">
          <p>SCORE:{info.points}</p>
          <p>END GAME</p>
          <div className="totalGameP">
            <p>Question</p>
            <p>Answer</p>
            <p>Correct</p>
            {info.questions.map((question) => (
              <div>
                <p>{question.question}</p>
                <p>{question.answer}</p>
                <p>{question.current_answer}</p>
              </div>
            ))}
          </div>
          <button className="game_btn-answer game_btn" onClick={goPrivate}>Go Back</button>
        </div>
      )}
    </div>
  );
}

export default Game;

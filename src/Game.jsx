import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiGame } from "./config";

function Game() {
  const [info, setInfo] = useState("");
  const navigateTo = useNavigate();

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  function tick() {
    console.log(info.time);
    if (info.time > 0) {
      setInfo({ ...info, time: info.time - 1 });
    }
  }

  const access_token = localStorage.getItem("token");
  const headers = {
    "X-Access-Token": `Bearer ${access_token}`,
  };
  const dataStartGame = {
    type_hard: 1,
    type: 1,
  };

  function gameOn(value) {
    if (!info) {
      axios
        .post(apiGame, dataStartGame, {
          headers,
        })
        .then((response) => {
          setInfo(response.data.data);
          console.log(info);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log(value);
      if (value) {
        console.log(value);

        const dataGame = {
          answer: value,
          type_hard: 1,
          type: 2,
        };

        axios
          .post(apiGame, dataGame, {
            headers,
          })
          .then((response) => {
            console.log(response);
            console.log(response.data.data);
            let trueAnswers = 0;
            if (response.data.data.questions) {
              response.data.data.questions.forEach((question) => {
                if (question.current_answer == question.answer) {
                  trueAnswers++;
                }
              });
              console.log("правильных ответов всего:", trueAnswers);
              let allInfo = [];
              let testInfo = {
                trueAnswers: trueAnswers,
                id: response.data.data.id,
                user_id: response.data.data.user_id,
                date: new Date().toLocaleString(),
                statistic: response.data.data.points,
              };
              if (localStorage.getItem("allInfo")) {
                allInfo = JSON.parse(localStorage.getItem("allInfo"));
                allInfo.push(testInfo);
                let strAllInfo = JSON.stringify(allInfo);
                localStorage.setItem("allInfo", strAllInfo);
              } else {
                allInfo.push(testInfo);
                let strAllInfo = JSON.stringify(allInfo);
                localStorage.setItem("allInfo", strAllInfo);
              }
            }
            setInfo(response.data.data);
            console.log(info);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function goBack() {
    setInfo("");
  }

  function goPrivate() {
    navigateTo("/Private");
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
          <button className="game_btn startgame_btn" onClick={gameOn}>
            START
          </button>
        </div>
      )}

      {info.options && (
        <div className="game">
          <p>SCORE:{info.points}</p>
          <p>
            TIMER:<a>{info.time}</a>
          </p>
          <p>{info.question}?</p>
          <div onClick={(e) => gameOn(e.target.value)}>
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
            <p>Correct</p>
            <p>Answer</p>
            {info.questions.map((question) => (
              <div key={Math.random()}>
                <p>{question.question}</p>
                <p>{question.answer}</p>
                <p>{question.current_answer}</p>
              </div>
            ))}
          </div>
          <button className="game_btn-answer game_btn" onClick={goPrivate}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;

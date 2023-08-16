import { useState } from "react"

function Game() {

    const [info, setInfo] = useState('')

    const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmE1NzNkMGI1YmIxODBkNGRjYzZiNDM2Yjg4NzRlZTE1ZTkxMDVmYzAxYjhhZmQzNTE5N2M1ZjliNzMwNDg0MjU3ZTdhZGQ3Y2U4NTViZGMiLCJpYXQiOjE2OTE5MjQxOTcsIm5iZiI6MTY5MTkyNDE5NywiZXhwIjoxNzIzNTQ2NTk3LCJzdWIiOiI0ODIiLCJzY29wZXMiOltdfQ.3NpnBaumA7SpOHrantdB_g7Emj0D9Ot-qlWanmpIVcuoPzqkEJJ_ud2ZfUMgrf9IFX3pCd2JhPMUQmkRClaYMn9BtFpJnM24PE1kQb1NrBIH8cacWLrIRGGtcUDdHwyUxOVmCwmY8eZTx4r6yCyXf_cc3rHRWGo6fChtMB-3wtWgWYkt7SoX2NQyKYHO9LZFQa47yLimZ23oZzMO029MgVdr5-IoXkA11UkbfjZ-6W4OHqi4QYCi5gfcXEcr5pvSr26FNYu6MPyr0ky7e8BvyFXdKTD_47l4vbYct3kIKhg41mNo-RxzIzE-J037I6PCixcJQUqvoiBOTkBE7qD-PNgC4PHIUDY7TegzC4B25pm2BQRTzDHGPuO18jpCFM6Msz2NPIk2aYxruAxfhDrV6wFz98WQ9B3HLJXeYuXiOPSzEdma8JTfoA2VsIijelz1UkUbhcOYPcgziposGjjGaB8C6EIp4Nc0zwrgEkxq0jwV70jwclFdMAZPWPnIHAvCwxrXYME8IbOcPyYzhDiJQ-Jai8_MzgaD5x4xm0yxxJ57gVVjpZVkWm_GBMLIAHyYyh5D9WnYJhxuJU1WAOYjC7EfRd-5gj_U5nIWCAenwrTc4pD4O412bLBe04Mpvq_x8x9EFrUU3iPLXGa0K9iP4-ssaZQKnG6Yq0RE5wftiWY"
    const headers = {
        'X-Access-Token': `Bearer ${access_token}`
    }
    const data1 = {
        type_hard: 1,
        type: 1
    }
  
    function startGame() {
        axios.post('https://internsapi.public.osora.ru/api/game/play', data1, { headers })
        .then(response => {
        setInfo(response.data.data)
        console.log(info)
        })
        .catch(error => {
        console.error(error)
        })
    }

    function nextQuestion(event) {
        if(event.target.value) {
            console.log(event.target.value)

            const data2 = {
                answer: event.target.value,
                type_hard: 1,
                type: 2
            }

            axios.post('https://internsapi.public.osora.ru/api/game/play', data2, { headers })
            .then(response => {
            console.log(response)  
            setInfo(response.data.data)
            console.log(info)
            })
            .catch(error => {
            console.error(error)
            })
        }
    }
    
    return (
        <div>
            {info == '' &&

                <div className="startgame">
                    <select>
                        <option disabled='disabled' value>Выберите сложность</option>
                        <option value="1">Легко/Easy</option>
                        <option value="2">Тяжело/Hard</option>
                    </select>
                    <button className="game_btn startgame_btn" onClick={startGame}>START</button>
                </div>
            }
            
            {info.time && 

                <div className="game">
                    <p>SCORE:{info.points}</p>
                    <p>TIMER:{info.time}</p>
                    <p>{info.question}?</p>
                    <div onClick={nextQuestion}>
                        <button className="game_btn" value={info.options[0]}>{info.options[0]}</button>
                        <button className="game_btn" value={info.options[1]}>{info.options[1]}</button>
                        <button className="game_btn" value={info.options[2]}>{info.options[2]}</button>
                        <button className="game_btn" value={info.options[3]}>{info.options[3]}</button>
                    </div>
                    <button className="game_btn-answer game_btn">Go Back</button>
                </div>
            }

            {info.questions && 

                <div className="totalGame">
                    <p>SCORE:{info.points}</p>
                    <p>END GAME</p>
                    <div className="totalGameP">
                        <p>Question</p>
                        <p>Answer</p>
                        <p>Correct</p>
                        {info.questions.map(question => (
                            <div>
                                <p>{question.question}</p>
                                <p>{question.answer}</p>
                                <p>{question.current_answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>     
    )  
}

export default Game

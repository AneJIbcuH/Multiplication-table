function Game() {

    return (
        <div className="game">
            <p>SCORE:</p>
            <p>TIMER:</p>
            <p>?</p>
            <div>
                <button className="game_btn-answer">1</button>
                <button className="game_btn-answer">2</button>
                <button className="game_btn-answer">3</button>
                <button className="game_btn-answer">4</button>
            </div>
            <button className="game_btn-answer game_btn">Go Back</button>
        </div>
    )
}

export default Game
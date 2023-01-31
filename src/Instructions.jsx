import {instructions} from "./questionList";

function Instructions(){
    return (
        <div className="instructions">
            <p>{instructions.startGame}</p>
            <p>{instructions.difficultyLevel}</p>
            <p>{instructions.category}</p>
            <p>{instructions.quiz}</p>
            <p>{instructions.timer}</p>
            <p>{instructions.scores}</p>
            <p>{instructions.scoreHistory}</p>
            <p>{instructions.leaderBoard}</p>
        </div>
    );
}

export default Instructions;
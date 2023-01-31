function ScoreHistory(props){

    return (
        <div>
            <div className="row table-header">
                <div className="col">Scores</div>
                <div className="col">Difficulty Level</div>
                <div className="col">Category Type</div>
            </div>  
            {Object.values(props.scoreHistory.recentScores).map((score,index) => (
                <div key={index} className="row">
                    <div className="col">{score.score}</div>
                    <div className="col">{score.difficultyLevel}</div>
                    <div className="col">{score.categoryType}</div>
                </div>
            ))}
        </div>
    );
}
export default ScoreHistory;
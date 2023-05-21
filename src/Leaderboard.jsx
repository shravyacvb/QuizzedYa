import { useState } from "react";

function Leaderboard(props){

    const [leaderboardByDifficulty, setLeaderboardByDifficulty] = useState('Easy');
    
    function getDifficultyBasedLeaderboard(event){
        setLeaderboardByDifficulty(event.target.value);
    }

    return (
        <div className="leaderboard">
            <h2>Leader Board</h2>
            {props.leaderboardData && 
                <div>
                    <label className="">
                        Difficulty Level:
                        <select value={leaderboardByDifficulty} onChange={getDifficultyBasedLeaderboard}> 
                            <option value="Difficult">Difficult</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Easy">Easy</option>
                        </select>
                    </label>
                    {props.leaderboardData[leaderboardByDifficulty] && <div className="table">
                        <div className="row table-header">
                            <div className="col">Username</div>
                            <div className="col">Scores</div>
                            <div className="col">Category Type</div>
                        </div>  
                        {Object.values(props.leaderboardData[leaderboardByDifficulty]).map((data, index) => (
                            <div key={index} className="row">
                                <div className="col">{data.username}</div>
                                <div className="col">{data.score}</div>
                                <div className="col">{data.categoryType}</div>
                            </div>
                        ))}
                    </div>}
                    {!props.leaderboardData[leaderboardByDifficulty] && <p>No data</p>}
                </div>
            }
        </div>
    );

}
export default Leaderboard;
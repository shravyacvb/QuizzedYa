import { useEffect } from "react";
import { fetchGameAllTimeHighScores } from "./services";

function Home(props){

    useEffect( () => {
          getLeaderboardData();
      },
      [props.setPage]
    );

    function getLeaderboardData(){
        fetchGameAllTimeHighScores()
            .then( results => {
                props.setLeaderboardData(results);
                props.setError('');
            })
            .catch( err => {
                props.setError('Some error occured. Please reload the page and try again!');
            })
      }

    function handleDifficulty(event) {
        props.setDifficultyLevel(event.target.value);
    }
    
    function handleCategory(event) {
        props.setCategoryType(event.target.value);
    }

    function handleGameType(event){
        props.setPage('Questions');
    }

    function handleShowScoreHistory(){
        props.setPage('Score History');
    }

    function getGameRules(){
        props.setPage('Instructions');
    }

    return (
        <div className="home">
            <form action="#" className='game-menu'>
            {props.username && <h2>Hi {props.username}!</h2>}
            <h3>Average Score: {props.averageScore}</h3>
                <button onClick={handleGameType}>Start Game</button>
                <label>
                    Difficulty Level:
                    <select value={props.difficultyLevel} onChange={handleDifficulty}> 
                    <option value="Difficult">Difficult</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Easy">Easy</option>
                    </select>
                </label>
                <label>
                    Category Type:
                    <select value={props.categoryType} onChange={handleCategory}> 
                    <option value="Movies">Movies</option>
                    <option value="Series">Series</option>
                    <option value="Games">Games</option>
                    <option value="History">History</option>
                    <option value="Science">Science</option>
                    </select>
                </label>
                <button onClick={getGameRules}>How to Play?</button>
                <button onClick={handleShowScoreHistory}>Score History</button>
            </form>
        </div>
    );
}

export default Home;
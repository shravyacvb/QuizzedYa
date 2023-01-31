import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';
import Countdown from './Countdown';
import Login from './Login';
import Home from './Home';
import { fetchSession, fetchLogout, fetchGame } from './services';
import ScoreHistory from './ScoreHistory';
import Leaderboard from './Leaderboard';
import Instructions from './Instructions';

export default function App() {

  const [difficultyLevel, setDifficultyLevel] = useState('Easy');
  const [categoryType, setCategoryType] = useState('Movies');
  const [page, setPage] = useState('Login');
  const [paused, setPaused] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [username, setUsername] = useState();
  const [scoreHistory, setScoreHistory] = useState();
  const [leaderboardData, setLeaderboardData] = useState();
  const [averageScore, setAverageScore] = useState(0);
  const [error, setError]= useState('');

  useEffect( () => {
    fetchSession(username)
      .then( results => {
        setUsername(results.username);
        setPage('Home');
        refresh();
        setError('');
      })
      .catch( err => {
        setError('Please Login');
      })
    },
    [setUsername]
  );

  function logout(){
    fetchLogout()
    .then( results => {
        setPage('Login');
        setError('');
    })
    .catch( err => {
        setError('Please reload the page and try again!');
    })
  }

  

  function refresh(){
    fetchGame()
    .then( results => {

	    setShowScore(false);
      setAverageScore(results.averageScore ? results.averageScore : 0);

      if (results.inProgressGame && results.inProgressGame.categoryType) {
        setCategoryType(results.inProgressGame.categoryType);
        setDifficultyLevel(results.inProgressGame.difficultyLevel);
        return;
      }

      if (results.recentScores && results.recentScores.length > 0) {
        setCategoryType(results.recentScores[0].categoryType);
        setDifficultyLevel(results.recentScores[0].difficultyLevel);
        setScoreHistory(results);
      }
	    else {
        setCategoryType(categoryType);
        setDifficultyLevel(difficultyLevel);
        setScoreHistory(scoreHistory);
	    }

      setError('');

    })
    .catch( err => {
       setError('Some error occured. Please reload the page and try again!');
    })
  }
	
	return (
    <div className='app'>
      <h1>QuizzedYa</h1>
      <div className='main'>
        {error && <p className='error'>{error}</p>}
        { page !== 'Login' && <button onClick={logout}>Logout</button>}
        { page === 'Login' && <Login setError={setError} username={username} setScoreHistory={setScoreHistory} setUsername={setUsername} setPage={setPage}></Login>}
        { page === 'Home' && 
            <div className="home-leaderboard">
              <Home setPage={setPage} setError={setError} setAverageScore={setAverageScore} setScoreHistory={setScoreHistory} username={username} averageScore={averageScore} setLeaderboardData={setLeaderboardData} scoreHistory={scoreHistory} categoryType={categoryType} setCategoryType={setCategoryType} difficultyLevel={difficultyLevel} setDifficultyLevel={setDifficultyLevel}></Home>
              <Leaderboard leaderboardData={leaderboardData}/>
            </div>
        }
        { page !== 'Home' && page !== 'Login' && <button onClick={ () => {setPage('Home'); setPaused(false); setShowScore(false);}}>Go to Menu</button>}
        {page === 'Questions' && 
          <div className="game-page"> 
            {!showScore && <Countdown minutes={1} setPage={setPage} setPaused={setPaused} paused={paused}/>}
            <Question paused={paused} setError={setError} setScoreHistory={setScoreHistory} setPage={setPage} showScore={showScore} setShowScore={setShowScore} setPaused={setPaused} difficultyLevel={difficultyLevel} categoryType={categoryType}/>
          </div>
        }
        {page === 'Score History' && 
          <div>
            {scoreHistory && scoreHistory.recentScores ? <ScoreHistory scoreHistory={scoreHistory}></ScoreHistory>
                          : <p>No data Available</p>}
          </div>
        }
        {page === 'Instructions' && 
          <div>
              <Instructions/>
          </div>
        }
      </div>
    </div>
  );
}
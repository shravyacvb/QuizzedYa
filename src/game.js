function game() {

  const gameData = {};
  const scores = {
      totalGames: 0,
      scoreHistory: {},
  };

  gameData.getPrevScores = function getPrevScores(username){
      const val = scores.scoreHistory[username];
      return val ? val : {};
  }

    gameData.getAllTimeHighScores = function getAllTimeHighScores(){
      const val = scores.scoreHistory.allTimeHighScores;
      return val ? val : {};
  }

  gameData.updateScores = function updateScores(scoreDetails) {

     if (!scores.scoreHistory[scoreDetails.username]) {
          scores.scoreHistory[scoreDetails.username] = {};
      }

       const userScoreDetails = scores.scoreHistory[scoreDetails.username];
       if (!scoreDetails.isCompleted) {
          userScoreDetails.inProgressGame = scoreDetails;
          return;
       }


       userScoreDetails.inProgressGame = {};
       if (!userScoreDetails.recentScores) {
          userScoreDetails.recentScores = [];
          userScoreDetails.totalGames = 0;
          userScoreDetails.averageScore = scoreDetails.score;
      }

     userScoreDetails.recentScores.unshift(scoreDetails);
     if (userScoreDetails.recentScores.length > 10) {
      userScoreDetails.recentScores.pop();
      }

     ++userScoreDetails.totalGames;
     userScoreDetails.averageScore = (userScoreDetails.averageScore + scoreDetails.score) / 2;


    scores.totalGames += 1;
    let difficultyLevel = scoreDetails.difficultyLevel;
    scores.highScore = parseInt(scoreDetails.score) > scores.highScore ? parseInt(scoreDetails.score) : scores.highScore;

    if(!scores.scoreHistory.allTimeHighScores) {
        scores.scoreHistory.allTimeHighScores = {}; 
    }

   if(!scores.scoreHistory.allTimeHighScores[difficultyLevel]) {
      scores.scoreHistory.allTimeHighScores[difficultyLevel] = []; 
   }

//    if(scores.scoreHistory.allTimeHighScores[difficultyLevel].username !== scoreDetails.username) {
//     scores.scoreHistory.allTimeHighScores[difficultyLevel].push(scoreDetails); 
//  }

   scores.scoreHistory.allTimeHighScores[difficultyLevel].push(scoreDetails);
   scores.scoreHistory.allTimeHighScores[difficultyLevel].sort(function(a, b) {
      if (a.score !== b.score) {
      return b.score - a.score
       }
       else {
          return a.time - b.time; /*return whoever did quiz earlier*/
       }
   });

  if (scores.scoreHistory.allTimeHighScores[difficultyLevel].length > 10) {
      scores.scoreHistory.allTimeHighScores[difficultyLevel].pop();
   }

  };

  return gameData;
};

module.exports = {
  game,
};
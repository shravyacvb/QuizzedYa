import { useState } from "react";
// import Countdown from "./Countdown";
import {questions} from "./questionList";
import { fetchAddGame } from "./services";

function Question(props){
    const [currentQuestion, setCurrentQuestion] = useState(0); 
    const [score, setScore] = useState(0);
    const filteredQuestions = [];
 
    filterQuestions();

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) { 
            setScore(score + 1); 
        }
        const nextQuestion = currentQuestion + 1; 
		if (currentQuestion < filteredQuestions.length) {
		    updateScoreList(score);
		}

        if (nextQuestion < filteredQuestions.length) { 
            setCurrentQuestion(nextQuestion); 
        } else { 
            props.setShowScore(true);
        } 
    };

    function updateScoreList(score){
        let scoreDetails = {};
		scoreDetails.score = score;
		scoreDetails.difficultyLevel = props.difficultyLevel;
        scoreDetails.categoryType = props.categoryType;
        scoreDetails.isCompleted =  (currentQuestion + 1) === filteredQuestions.length;
        fetchAddGame(scoreDetails)
          .then( results => {
            if (results ) {
                props.setScoreHistory(results);
            }
            props.setError('');
          })
          .catch( err => {
            props.setError('Some error occured. Please reload the page and try again!');
          })
    }

    function filterQuestions(){
         questions.map(question => {
           if(question.questionLevel === props.difficultyLevel && question.questionType === props.categoryType){
                filteredQuestions.push(question);
            }

            return filterQuestions;
        });
        
    }

    return ( 
        <div className=''> 
            {props.showScore ? 
                ( <div className='score-section'> 
                        <h2>You scored {score} out of {filteredQuestions.length} </h2>
                        {filteredQuestions.map((question,index) => (
                            <div key={question.questionText} className='question-section'>
                                <div className='question-text'>
                                   <b>Question {index + 1}:</b> {question.questionText}
                                </div> 
                                <div className='options'> 
                                    {question.answerOptions.map((answerOption) => ( 
                                        <p className={answerOption.isCorrect ? "answer" : ""} key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</p> 
                                        ))
                                    } 
                                </div>
                            </div>))}
                    </div> ) : 
                (   <div className="question">
                        {/* <Countdown minutes={1} setPage={props.setPage}/> */}
                        {!props.paused && <div>
                        <div className='question-section'> 
                            <div className='question-count'> 
                                <span>Question {currentQuestion + 1} / {filteredQuestions.length}</span>   
                            </div> 
                            <div className='question-text'>
                                {filteredQuestions[currentQuestion].questionText}
                            </div> 
                        </div> 
                        <div className='answer-section'> 
                            {filteredQuestions[currentQuestion].answerOptions.map((answerOption) => ( 
                                <button className="answer-option" key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button> 
                                ))
                            } 
                        </div>
                        </div>}
                    </div> 
                )
            } 
        </div> 
    );
}

export default Question;
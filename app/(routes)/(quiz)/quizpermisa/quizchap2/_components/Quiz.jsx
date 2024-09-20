"use client"


// components/Quiz.js
import { useState, useEffect } from 'react';
import dataquizchap2 from '../dataquizchap2';
export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180); // Timer in seconds
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setQuizFinished(true);
    }
  }, [timeLeft, quizFinished]);

  // Handle user's answer
  const handleAnswer = (answer) => {
    if (quizFinished) return;

    const correct = dataquizchap2[currentQuestion].correctAnswer === answer;
    if (correct) {
      setScore(score + 1);
    }

    setUserAnswers([...userAnswers, { question: dataquizchap2[currentQuestion].question, selected: answer, correct }]);

    // Move to next question
    if (currentQuestion + 1 < dataquizchap2.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  // Calculate final score
  const finalScore = (score / dataquizchap2.length) * 100;

  // Messages based on score
  const renderScoreMessage = () => {
    if (finalScore >= 80) {
      return `Bravo! Vous avez terminé le quiz avec un score de ${finalScore.toFixed(2)}.`;
    } else {
      return `Une petite révision peut vous aider. Votre score est de ${finalScore.toFixed(2)}.`;
    }
  };

  return (
    <div className='grid grid-cols-1 p-3 sm:p-10 gap-5 bg-white m-[0.5rem] sm:m-10 rounded-[8px]'>
      {timeLeft > 0 && !quizFinished && (
        <div className='w-full'>
          <h2 className='p-4 text-md  sm:text-2xl font-bold bg-primary max-w-[18rem] block rounded-[4px] text-white'>Il vous reste : {timeLeft}s</h2>
          <h3 className='border-b-2 border-gray-100 text-xl font-bold text-gray-700 my-6'>Question {currentQuestion + 1} sur {dataquizchap2.length}</h3>
          <p className='sm:text-[20px]  text-md font-semibold text-gray-700 py-4' >{dataquizchap2[currentQuestion].question}</p>
          <div className='w-full'> 
            {dataquizchap2[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} className='flex flex-col-1 pb-2 gap-4 border border-gray-100 py-4 px-3 mb-2 sm:px-10 rounded-[4px]'>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      {quizFinished && (
        <div>
          {timeLeft === 0 ? (
            <p>Votre temps d&apos;exercice est terminé.</p>
          ) : (
            <p>{renderScoreMessage()}</p>
          )}
          <h3>Résumé des réponses :</h3>
          <ul>
            {userAnswers.map((answer, index) => (
              <li key={index}>
                {answer.question} - Votre réponse: {answer.selected} - {answer.correct ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
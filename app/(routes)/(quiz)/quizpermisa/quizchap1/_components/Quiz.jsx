"use client"





// components/Quiz.js
import { useState, useEffect } from 'react';
import dataquizchap1 from '../dataquizchap1';
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

    const correct = dataquizchap1[currentQuestion].correctAnswer === answer;
    if (correct) {
      setScore(score + 1);
    }

    setUserAnswers([...userAnswers, { question: dataquizchap1[currentQuestion].question, selected: answer, correct }]);

    // Move to next question
    if (currentQuestion + 1 < dataquizchap1.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  // Calculate final score
  const finalScore = (score / dataquizchap1.length) * 100;

  // Messages based on score
  const renderScoreMessage = () => {
    if (finalScore >= 80) {
      return `Bravo! Vous avez terminé le quiz avec un score de ${finalScore.toFixed(2)}.`;
    } else {
      return `Une petite révision peut vous aider. Votre score est de ${finalScore.toFixed(2)}.`;
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-10 gap-5 bg-white m-10 rounded-[8px]'>
      {timeLeft > 0 && !quizFinished && (
        <div className=''>
          <h2 className='p-4  text-2xl font-bold bg-primary w-auto block rounded-[4px] text-white'>Il vous reste : {timeLeft}</h2>
          <h3 className='border-b-2 border-gray-100 text-xl font-bold text-gray-700 my-6'>Question {currentQuestion + 1} sur {dataquizchap1.length}</h3>
          <p className='text-[20px] font-semibold text-gray-700 py-4' >{dataquizchap1[currentQuestion].question}</p>
          <div>
            {dataquizchap1[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} className='flex flex-col-1 gap-4 border border-gray-50 py-4 px-10 rounded-[4px]'>
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

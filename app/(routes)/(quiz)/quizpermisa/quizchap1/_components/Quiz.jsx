"use client"

import { useState, useEffect } from 'react';
import dataquizchap1 from '../dataquizchap1';
import { useRouter } from 'next/navigation'; // Utilisé pour la redirection
import Image from 'next/image';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // Timer in seconds
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const router = useRouter(); // Utilisé pour la redirection

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

  // Convert seconds to minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}s`;
  };

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

  // Reload page function
  const handleRetry = () => {
    window.location.reload();
  };

  // Redirect to next course
  const handleContinue = () => {
    router.push('/next-course'); // Redirige vers le prochain cours, changer '/next-course' par la bonne route
  };

  // Messages based on score
  const renderScoreMessage = () => {
    if (finalScore >= 80) {
      return (
        <div>
          <p className='text-xl font-bold text-white py-4 bg-primary flex rounded-md px-4 my-3 max-w-2xl text-center items-center justify-center'>
            Bravo! Vous avez terminé le quiz avec un score de {finalScore.toFixed(0)} / 100
          </p>
          <button onClick={handleContinue} className='bg-green-500 text-white py-2 px-4 rounded-md mr-4'>
            Continuer
          </button>
          <button onClick={handleRetry} className='bg-blue-500 text-white py-2 px-4 rounded-md'>
            Reprendre
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p className='text-xl font-bold text-white py-4 bg-primary flex rounded-md px-4 my-3 max-w-2xl text-center items-center justify-center'>
            Une petite révision peut vous aider. Votre score est de {finalScore.toFixed(0)} / 100
          </p>
          <button onClick={handleRetry} className='bg-blue-500 text-white py-2 px-4 rounded-md'>
            Reprendre
          </button>
        </div>
      );
    }
  };

  return (
    <div className='grid grid-cols-1 p-3 sm:p-10 gap-5 bg-white m-[0.5rem] sm:m-10 rounded-[8px]'>
      {timeLeft > 0 && !quizFinished && (
        <div className='w-full'>
          <h2 className='text-2xl font-bold pb-6 text-gray-800'>Quiz sur la leçon: La signalisation routière</h2>
          <h2 className='p-4 text-md sm:text-2xl font-bold bg-primary max-w-[18rem] block rounded-[4px] text-white'>
            Il vous reste : {formatTime(timeLeft)}
          </h2>
          <h3 className='border-b-2 border-gray-100 text-xl font-bold text-gray-700 my-6'>
            Question {currentQuestion + 1} sur {dataquizchap1.length}
          </h3>
          
          {dataquizchap1[currentQuestion].image && (
            <Image
              src={dataquizchap1[currentQuestion].image}
              alt="Illustration"
              width={600}
              height={350}
              className='my-4 max-w-full h-auto'
            />
          )}
          <p className='sm:text-[20px] text-md font-semibold text-gray-700 py-4'>
            {dataquizchap1[currentQuestion].question}
          </p>
          <div className='w-full'>
            {dataquizchap1[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className='flex flex-col-1 pb-2 gap-4 border border-gray-100 py-4 px-3 mb-2 sm:px-10 rounded-[4px]'
              >
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
            renderScoreMessage()
          )}
          <h3>Résumé des réponses :</h3>
          <ul>
            {userAnswers.map((answer, index) => (
              <li key={index}>
                {answer.question} - Votre réponse: {answer.selected} - {answer.correct ? 'Correct' : 'Incorrect'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

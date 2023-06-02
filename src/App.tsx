import { useState } from 'react'
import { Button } from '@mui/material';
import Title from './components/Title/Title'
import StartArea from './components/StartArea/StartArea';
import Header from './components/Header';
import QuestionArea from './components/QuestionArea/QuestionArea';
import styles from './App.module.css'



function App() {

  const [playing, setPlaying] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "How many continents are there?",
      correctAnswer: "7",
      incorrectAnswers: ["5", "6", "8"]
    },
    {
      id: 2,
      question: "Question 2?",
      correctAnswer: "Correct Answer",
      incorrectAnswers: ["Incorrect answer 1", "Incorrect answer 2", "Incorrect answer 3"]
    },
    {
      id: 3,
      question: "Question 3?",
      correctAnswer: "Correct Answer",
      incorrectAnswers: ["Incorrect answer 1", "Incorrect answer 2", "Incorrect answer 3"]
    },
    {
      id: 4,
      question: "Question 4?",
      correctAnswer: "Correct Answer",
      incorrectAnswers: ["Incorrect answer 1", "Incorrect answer 2", "Incorrect answer 3"]
    },
    {
      id: 5,
      question: "Question 5?",
      correctAnswer: "Correct Answer",
      incorrectAnswers: ["Incorrect answer 1", "Incorrect answer 2", "Incorrect answer 3"]
    },
  ]

  return (
    <>
      {
        !playing && !finished ?  
        <div className={styles.startAreaContainer}>
          <Title/>
          <StartArea startGame={setPlaying}/> 
        </div>
        : 
        <>
        <Header score={playerScore}/>
        <div className={styles.questionAreaContainer}>
          <QuestionArea questions={questions}/>
        </div>
        </>
      }
    </>
  )
}

export default App

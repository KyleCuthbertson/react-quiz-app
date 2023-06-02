import './App.css'
import { useState } from 'react'
import Title from './components/Title/Title'
import StartArea from './components/StartArea/StartArea';
import Header from './components/Header';


function App() {

  const [playing, setPlaying] = useState<boolean>();
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
        !playing ?  
        <>
          <Title/>
          <StartArea startGame={setPlaying}/> 
        </>
        : 
        <Header score={playerScore}/>
      }
    </>
  )
}

export default App

import { useState } from 'react'

import Title from './components/Title/Title'
import StartArea from './components/StartArea/StartArea';
import Header from './components/Header';
import QuestionArea from './components/QuestionArea/QuestionArea';
import styles from './App.module.css'



function App() {

  const [playing, setPlaying] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState<number>(0);


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
            <QuestionArea playerScore={playerScore}/>
          </div>
        </>
      }
    </>
  )
}



export default App

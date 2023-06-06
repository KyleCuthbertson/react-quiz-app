import { useState } from 'react'

import Title from './components/Title/Title'
import StartArea from './components/StartArea/StartArea';
import Header from './components/Header';
import QuestionArea from './components/QuestionArea/QuestionArea';
import styles from './App.module.css'
import { TailSpin } from 'react-loader-spinner';



function App() {

  const [playing, setPlaying] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState(0);


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
          {
            loading ?
            <div className={styles.loadingSpinner}> 
              <TailSpin
                height="80"
                width="80"
                color="#1976d2"
                ariaLabel="tail-spin-loading"
                radius="1"
                visible={true}
              />
            </div>
            :
              <QuestionArea setLoading={setLoading}/>
          } 
          </div>
        </>
      }
    </>
  )
}



export default App

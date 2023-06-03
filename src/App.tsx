import { useEffect, useState } from 'react'
import axios from 'axios';
import Title from './components/Title/Title'
import StartArea from './components/StartArea/StartArea';
import Header from './components/Header';
import QuestionArea from './components/QuestionArea/QuestionArea';
import styles from './App.module.css'
import { TailSpin } from 'react-loader-spinner';



function App() {

  const [playing, setPlaying] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState(0);


  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await axios('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple&encode=url3986');
    return data;
  }

  useEffect(() => {
    fetchData()
    .then((response) => {
      setQuestions(response.data.results)
      setSuccess(true);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
    })
    
  }, [])

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
              <QuestionArea success={success} questions={questions}/>
          }
          </div>
        </>
      }
    </>
  )
}



export default App

import { Dispatch, SetStateAction } from 'react';
import styles from './AnswerCard.module.css';

interface AnswerCardProps {
  playerScore: number,
  setPlayerScore: Dispatch<SetStateAction<number>>
  correctAnswer: string,
  answer: string
}

const AnswerCard = ({playerScore, setPlayerScore, correctAnswer, answer}: AnswerCardProps) => {


  const checkAnswer = () => {
    if (answer === correctAnswer) {
      setPlayerScore(playerScore + 1)
      console.log("Correct answer!");
    }
    else {
      console.log("Incorrect!");
    }
  }
  

  return (
    <button onClick={checkAnswer} className={styles.answerContainer}>
      {answer}
    </button>
  )
}

export default AnswerCard;
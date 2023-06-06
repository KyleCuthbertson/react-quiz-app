import styles from './AnswerCard.module.css';

const AnswerCard = (props: any) => {

  const { answer, correctAnswer } = props;


  const checkAnswer = () => {
    if (answer === correctAnswer) {
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
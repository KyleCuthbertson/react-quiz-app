import styles from './AnswerCard.module.css';

const AnswerCard = (props: any) => {

  const { answer } = props;

  return (
    <div className={styles.answerContainer}>
      <p>{answer}</p>
    </div>
  )
}

export default AnswerCard;
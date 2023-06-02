import { Button } from '@mui/material';
import styles from './QuestionArea.module.css';
import { QuestionAreaProps } from './types';
import { useState } from 'react';

const QuestionArea = (props: QuestionAreaProps) => {

  const { questions } = props;
  const [questionNumber, setQuestionNumber] = useState<number>(1);


  return (
    <>
    <div className={styles.questionContainer}>
      {
      questions.map((question): any => (
        questionNumber === question.id ? 
        <p key={question.id}>{question.question}</p> 
        :
        null
      ))}
    </div>
    <div className={styles.answerContainer}>
        
    </div>
    <Button className={styles.nextBtn} size='large' variant='contained' onClick={() => setQuestionNumber(questionNumber + 1)} disabled>Next question</Button>
    </>
  )
}

export default QuestionArea;
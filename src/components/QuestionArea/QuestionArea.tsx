import { Button } from '@mui/material';
import styles from './QuestionArea.module.css';
import { QuestionAreaProps } from './types';
import { useState } from 'react';
import AnswerCard from '../AnswerCard/AnswerCard';

const QuestionArea = (props: QuestionAreaProps) => {

  const { questions, success } = props;
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  // Add id to each question from API
  if (success) {
    for (let i = 0; i < questions.length; i++) {
      questions[i].id = i;
    }
  }

  // Add answers to array and randomise
  questions.forEach((question) => {
    if (!question.incorrect_answers.includes(question.correct_answer)) {
      question.incorrect_answers.push(question.correct_answer);
    }
  })

  // Decode answers
  questions.forEach((question) => {
    decodeURIComponent(question.correct_answer);
  })

  return (
    <>      
      {
      questions.map((question): any => (
        questionNumber === question.id ? 
        <div key={question.id} className={styles.mainContainer}>
          <div className={styles.questionContainer}>
            <p>{decodeURIComponent(question.question)}</p> 
          </div>
          <div className={styles.answersContainer}>
            {
              question.incorrect_answers.map((answer: any) => (
                <AnswerCard key={answer} answer={decodeURIComponent(answer)}/>
              ))
            }
          </div>
          <div className={styles.btnContainer}>
            <Button className={styles.nextBtn} size='large' variant='contained' onClick={() => setQuestionNumber(questionNumber + 1)}>Next question</Button>
          </div>
        </div>
        :
        null
      ))}
        </>
  )
}

export default QuestionArea;
import { Button } from '@mui/material';
import styles from './QuestionArea.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerCard from '../AnswerCard/AnswerCard';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { TailSpin } from 'react-loader-spinner';

type QuestionAreaProps = {
  category: string,
  correctAnswer: string,
  difficulty: string,
  incorrectAnswers: string[],
  question: string,
  type: string,
  id: number | undefined
}[]

const QuestionArea = () => {

  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [questions, setQuestions] = useState<QuestionAreaProps>([]);

    // Access the client
    // const queryClient = useQueryClient()


  const fetchData = async () => {
    let data = await axios('https://the-trivia-api.com/v2/questions')
    return data;
  }

  // fetch questions
  const questionsQuery = useQuery({
    queryKey: ["questions"], 
    queryFn: (() => fetchData()
    .then((res) => {
      setQuestions(res.data)
      console.log(res.data)
      return res.data
    })
    )
  })

  if (questionsQuery.isLoading) {
    return (
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
    )
  }

  if (questionsQuery.isError) {
    return <h2>Failed to get questions</h2>
  }

  if (questionsQuery.isSuccess) {

    // Add answers to array and randomise
    questions.forEach((question) => {
      if (!question.incorrectAnswers.includes(question.correctAnswer)) {
        question.incorrectAnswers.push(question.correctAnswer);
      }
    })
  }

  const nextQuestion = () => {
    window.scrollTo(0, 0);
    setQuestionNumber(questionNumber + 1)
  }


  return (
    <>
      {
      questionsQuery.isSuccess ? 
      questions.map((question): any => (
        questionNumber === question.id ? 
        <div key={question.id} className={styles.mainContainer}>
          <div className={styles.questionContainer}>
            <p>{question.question}</p> 
          </div>
          <div className={styles.listAnswerContainer}>
            {
              question.incorrectAnswers.map((answer: any) => (
                <AnswerCard key={answer} correctAnswer={question.correctAnswer} answer={answer}/>
              ))
            }
          </div>
          <div className={styles.btnContainer}>
            <Button className={styles.nextBtn} size='large' variant='contained' onClick={nextQuestion}>Next question</Button>
          </div>
        </div>
        :
        null
      ))
      : 
      null
    }
  </>
  )

}

export default QuestionArea;
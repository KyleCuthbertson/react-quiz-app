import { Button } from '@mui/material';
import styles from './QuestionArea.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerCard from '../AnswerCard/AnswerCard';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { TailSpin } from 'react-loader-spinner';

type QuestionAreaProps = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
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
    let data = await axios('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple&encode=url3986')
    return data;
  }

  // fetch questions
  const questionsQuery = useQuery({
    queryKey: ["questions"], 
    queryFn: (() => fetchData()
    .then((res) => {
      setQuestions(() => (res.data.results))
      return res.data.results
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
    // Add id to each question from API
    for (let i = 0; i < questions.length; i++) {
      questions[i].id = i;
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
            <p>{decodeURIComponent(question.question)}</p> 
          </div>
          <div className={styles.listAnswerContainer}>
            {
              question.incorrect_answers.map((answer: any) => (
                <AnswerCard key={answer} correctAnswer={question.correct_answer} answer={decodeURIComponent(answer)}/>
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
      : null
    }
  </>
  )

}

export default QuestionArea;
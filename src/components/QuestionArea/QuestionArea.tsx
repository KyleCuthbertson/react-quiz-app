import { Button } from '@mui/material';
import styles from './QuestionArea.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerCard from '../AnswerCard/AnswerCard';
import { useQuery, useQueryClient } from '@tanstack/react-query';

type QuestionAreaProps = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string,
  id: number | undefined
}[]

const QuestionArea = ({ setLoading }: any) => {

  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionAreaProps>([]);

    // Access the client
    const queryClient = useQueryClient()


  const fetchData = async () => {
    let data = await axios('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple&encode=url3986')
    return data;
  }

  // fetch questions
  const questionsQuery = useQuery({
    queryKey: ["questions"], 
    queryFn: fetchData
  })

  console.log(questionsQuery)

  if (questionsQuery.isLoading) {
    return <h2>Loading...</h2>
  }
  if (questionsQuery.isError) {

  }




  // // Add id to each question from API
  // if (success) {
  //   for (let i = 0; i < questions.length; i++) {
  //     questions[i].id = i;
  //   }
  // }

  // // Add answers to array and randomise
  // questions.forEach((question) => {
  //   if (!question.incorrect_answers.includes(question.correct_answer)) {
  //     question.incorrect_answers.push(question.correct_answer);
  //   }
  // })

  // // Decode answers
  // questions.forEach((question) => {
  //   decodeURIComponent(question.correct_answer);
  // })

  const nextQuestion = () => {
    window.scrollTo(0, 0);
    // setQuestionNumber(questionNumber + 1)
  }


  return (
    <>      
      {
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
      ))}
        </>
  )
}

export default QuestionArea;
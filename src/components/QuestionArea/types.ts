export interface QuestionAreaProps {
  questions: {
    id: number,
    question: string,
    correctAnswer: string,
    incorrectAnswers: string[]
  }[]
}
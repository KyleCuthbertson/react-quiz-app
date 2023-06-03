export interface QuestionAreaProps {
  success: boolean,
  questions: {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
    id: number | undefined
  }[]
}
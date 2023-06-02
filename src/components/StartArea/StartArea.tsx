import Button from '@mui/material/Button';
import { StartAreaProps } from './types';

const StartArea = (props: StartAreaProps) => {

  const { startGame } = props;

  return (
    <>
      <Button onClick={() => startGame(true)} size='large' variant="contained">Start Quiz</Button>
    </>
  )
}

export default StartArea;
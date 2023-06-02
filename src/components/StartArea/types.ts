import { Dispatch, SetStateAction } from "react";

export interface StartAreaProps {
  startGame: Dispatch<SetStateAction<boolean | undefined>>
}
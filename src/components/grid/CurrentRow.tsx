import { Cell } from "./Cell";
import { splitter } from "../../lib/words";

type Props = {
  guess: string;
};

export const CurrentRow = ({ guess }: Props) => {
  const splitGuess = splitter.splitGraphemes(guess);
  const emptyCells = Array.from(Array(5 - splitGuess.length));

  return (
    <div className="flex justify-center mb-1 flex-row-reverse">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};

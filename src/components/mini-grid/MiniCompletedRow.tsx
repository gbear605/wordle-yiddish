import { getGuessStatuses } from "../../lib/statuses";
import { MiniCell } from "./MiniCell";
import { splitter } from "../../lib/words";

type Props = {
  guess: string;
};

export const MiniCompletedRow = ({ guess }: Props) => {
  const statuses = getGuessStatuses(guess);

  return (
    <div className="flex justify-center mb-1 flex-row-reverse">
      {splitter.splitGraphemes(guess).map((letter, i) => (
        <MiniCell key={i} status={statuses[i]} />
      ))}
    </div>
  );
};

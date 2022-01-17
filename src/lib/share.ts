import { getGuessStatuses } from "./statuses";
import { solutionIndex, splitter } from "./words";

export const shareStatus = (guesses: string[]) => {
  navigator.clipboard.writeText(
    "Yiddish Wordle " +
      solutionIndex +
      " " +
      guesses.length +
      "/6\n\n" +
      generateEmojiGrid(guesses)
  );
};

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess);
      return '\u200F' + splitter.splitGraphemes(guess).map((letter, i) => {
          switch (status[i]) {
            case "correct":
              return "🟩";
            case "present":
              return "🟨";
            default:
              return "⬜";
          }
        })
        .join("");
    })
    .join("\n");
};

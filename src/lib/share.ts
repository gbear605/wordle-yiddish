import { getGuessStatuses } from './statuses'
import { solutionIndex, splitter } from './words'
import { GAME_TITLE } from '../constants/strings'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE('ENGLISH')} ${solutionIndex} ${
      lost ? 'X' : guesses.length
    }/6\n\n` + generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return (
        '\u202E' +
        splitter
          .splitGraphemes(guess)
          .map((letter, i) => {
            switch (status[i]) {
              case 'correct':
                return '🟩'
              case 'present':
                return '🟨'
              default:
                return '⬜'
            }
          })
          .join('')
      )
    })
    .join('\n')
}

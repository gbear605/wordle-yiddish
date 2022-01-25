import { solution, splitter } from './words'

export type CharStatus = 'absent' | 'present' | 'correct'

export type CharValue =
  | 'א'
  | 'אַ'
  | 'אָ'
  | 'ב'
  | 'בּ'
  | 'בֿ'
  | 'ג'
  | 'ד'
  | 'ה'
  | 'ו'
  | 'ז'
  | 'ח'
  | 'ט'
  | 'י'
  | 'כ'
  | 'כּ'
  | 'ל'
  | 'מ'
  | 'נ'
  | 'ס'
  | 'ע'
  | 'פּ'
  | 'פֿ'
  | 'צ'
  | 'ק'
  | 'ר'
  | 'ש'
  | 'ת'
  | 'תּ'
  | 'װ'
  | 'ױ'
  | 'ײ'
  | 'ײַ'

export const characters = [
  'א',
  'אַ',
  'אָ',
  'ב',
  'בּ',
  'בֿ',
  'ג',
  'ד',
  'ה',
  'ו',
  'ז',
  'ח',
  'ט',
  'י',
  'כ',
  'כּ',
  'ל',
  'מ',
  'נ',
  'ס',
  'ע',
  'פּ',
  'פֿ',
  'צ',
  'ק',
  'ר',
  'ש',
  'ת',
  'תּ',
  'װ',
  'ױ',
  'ײ',
  'ײַ',
]

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}

  let solutionGraphemes = splitter.splitGraphemes(solution)

  guesses.forEach((word) => {
    splitter.splitGraphemes(word).forEach((letter, i) => {
      if (!solution.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === solutionGraphemes[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = splitter.splitGraphemes(solution)
  const splitGuess = splitter.splitGraphemes(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(splitGuess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}

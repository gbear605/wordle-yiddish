function getText(
  words: { YIDDISH: string; ENGLISH: string },
  language: Language
) {
  return words[language]
}

export const GAME_TITLE = (language: Language) => {
  return getText({ YIDDISH: 'ווערטל', ENGLISH: 'Yiddish Wordle' }, language)
}

export const WIN_MESSAGES = (language: Language) => {
  let winMessages = []
  switch (language) {
    case 'YIDDISH': {
      winMessages = ['דו האָסט געוווּנען!']
      break
    }
    case 'ENGLISH': {
      winMessages = ['Great job!']
      break
    }
  }

  return winMessages[Math.floor(Math.random() * winMessages.length)]
}
export const GAME_COPIED_MESSAGE = (language: Language) => {
  return getText(
    {
      YIDDISH: 'שפּיל קאָפּירט צום קלעמברעטל',
      ENGLISH: 'Game copied to clipboard',
    },
    language
  )
}
export const ABOUT_GAME_MESSAGE = (language: Language) => {
  return getText(
    { YIDDISH: 'װעגן װערטל', ENGLISH: 'About this game' },
    language
  )
}
export const NOT_ENOUGH_LETTERS_MESSAGE = (language: Language) => {
  return getText(
    { YIDDISH: 'נישט גענוג אותיות', ENGLISH: 'Not enough letters' },
    language
  )
}
export const WORD_NOT_FOUND_MESSAGE = (language: Language) => {
  return getText(
    { YIDDISH: 'װאָרט נישט אין װערטער־רשימה', ENGLISH: 'Unknown word' },
    language
  )
}
export const CORRECT_WORD_MESSAGE = (solution: string, language: Language) => {
  return getText(
    {
      YIDDISH: `דאָס װאָרט איז געװען ${solution}`,
      ENGLISH: `The word was ${solution}`,
    },
    language
  )
}
export const ENTER_TEXT = (language: Language) => {
  return getText(
    {
      YIDDISH: 'טרעפֿן',
      ENGLISH: 'ENTER',
    },
    language
  )
}
export const DELETE_TEXT = (language: Language) => {
  return getText(
    {
      YIDDISH: 'אױסמעקן',
      ENGLISH: 'DELETE',
    },
    language
  )
}
export const STATISTICS_TITLE = (language: Language) => {
  return getText(
    {
      YIDDISH: 'סטאַטיסטיק',
      ENGLISH: 'Statistics',
    },
    language
  )
}
export const GUESS_DISTRIBUTION_TEXT = (language: Language) => {
  return getText(
    {
      YIDDISH: 'טרעף־פֿאַרשפּרייטונג',
      ENGLISH: 'Guess Distribution',
    },
    language
  )
}
export const NEW_WORD_TEXT = (language: Language) => {
  return getText(
    {
      YIDDISH: 'נײַ װערטל',
      ENGLISH: 'New Word in',
    },
    language
  )
}
export const SHARE_TEXT = (language: Language) => {
  return getText(
    {
      YIDDISH: 'מעלדן',
      ENGLISH: 'Share',
    },
    language
  )
}
export const TOTAL_TRIES_TEXT = (language: Language) => {
  return getText(
    {
      YIDDISH: 'געשפּילט',
      ENGLISH: 'Total tries',
    },
    language
  )
}
export const SUCCESS_RATE_TEXT = (language: Language) => {
  return getText(
    {
      YIDDISH: 'נצחון',
      ENGLISH: 'Success rate',
    },
    language
  )
}
export const CURRENT_STREAK_TEXT = (language: Language) => {
  return getText(
    {
      YIDDISH: 'איצטיקע געװין־סעריע',
      ENGLISH: 'Current streak',
    },
    language
  )
}
export const BEST_STREAK_TEXT = (language: Language) => {
  return getText(
    {
      YIDDISH: 'בעסטע געװין־סעריע',
      ENGLISH: 'Best streak',
    },
    language
  )
}

export type Language = 'YIDDISH' | 'ENGLISH'

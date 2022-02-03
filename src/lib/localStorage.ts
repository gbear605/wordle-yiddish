import { Language } from '../constants/strings'

const gameStateKey = 'gameState'

type StoredGameState = {
  guesses: string[]
  solution: string
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'gameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}

const gameLanguageKey = 'gameLang'

export const saveLanguageToLocalStorage = (language: Language) => {
  localStorage.setItem(gameLanguageKey, language)
}

export const loadLanguageFromLocalStorage: () => Language = () => {
  const language = localStorage.getItem(gameLanguageKey)
  if (language === 'YIDDISH') {
    return 'YIDDISH'
  }
  if (language === 'ENGLISH') {
    return 'ENGLISH'
  }
  return 'ENGLISH' // default case
}

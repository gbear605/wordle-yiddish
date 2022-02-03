import {
  InformationCircleIcon,
  ChartBarIcon,
  SunIcon,
  TranslateIcon,
} from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import { Alert } from './components/alerts/Alert'
import { Grid } from './components/grid/Grid'
import { Keyboard } from './components/keyboard/Keyboard'
import { AboutModal } from './components/modals/AboutModal'
import { InfoModal } from './components/modals/InfoModal'
import {
  isWordInWordList,
  isWinningWord,
  solution,
  splitter,
} from './lib/words'
import { StatsModal } from './components/modals/StatsModal'
import {
  GAME_TITLE,
  WIN_MESSAGES,
  GAME_COPIED_MESSAGE,
  ABOUT_GAME_MESSAGE,
  NOT_ENOUGH_LETTERS_MESSAGE,
  WORD_NOT_FOUND_MESSAGE,
  CORRECT_WORD_MESSAGE,
  Language,
} from './constants/strings'
import { addStatsForCompletedGame, loadStats } from './lib/stats'
import {
  loadGameStateFromLocalStorage,
  saveGameStateToLocalStorage,
  loadLanguageFromLocalStorage,
  saveLanguageToLocalStorage,
} from './lib/localStorage'
import './App.css'

const ALERT_TIME_MS = 5000

function App() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameWon, setIsGameWon] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false)
  const [isGameWonAlertOpen, setIsGameWonAlertOpen] = useState(false)
  const [isGameCopiedAlertOpen, setIsGameCopiedAlertOpen] = useState(false)
  const [isGameLost, setIsGameLost] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : prefersDarkMode
      ? true
      : false
  )
  const [language, setLanguage] = useState<Language>(
    loadLanguageFromLocalStorage()
  )
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameStateFromLocalStorage()
    if (loaded?.solution !== solution) {
      return []
    }
    const gameWasWon = loaded.guesses.includes(solution)
    if (gameWasWon) {
      setIsGameWon(true)
    }
    if (loaded.guesses.length === 6 && !gameWasWon) {
      setIsGameLost(true)
    }
    return loaded.guesses
  })

  const [stats, setStats] = useState(() => loadStats())

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  const handleLanguage = (language: Language) => {
    setLanguage(language)
    saveLanguageToLocalStorage(language)
  }

  useEffect(() => {
    saveGameStateToLocalStorage({ guesses, solution })
  }, [guesses])

  useEffect(() => {
    if (isGameWon) {
      setIsGameWonAlertOpen(true)
      setTimeout(() => {
        setIsGameWonAlertOpen(false)
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
    if (isGameLost) {
      setTimeout(() => {
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
  }, [isGameWon, isGameLost])

  const onChar = (value: string) => {
    if (
      splitter.splitGraphemes(currentGuess).length < 5 &&
      guesses.length < 6 &&
      !isGameWon
    ) {
      setCurrentGuess(`${currentGuess}${value}`)
    }
  }

  const onDelete = () => {
    setCurrentGuess(splitter.splitGraphemes(currentGuess).slice(0, -1).join(''))
  }

  const onEnter = () => {
    if (isGameWon || isGameLost) {
      return
    }
    if (!(splitter.splitGraphemes(currentGuess).length === 5)) {
      setIsNotEnoughLetters(true)
      return setTimeout(() => {
        setIsNotEnoughLetters(false)
      }, ALERT_TIME_MS)
    }

    if (!isWordInWordList(currentGuess)) {
      setIsWordNotFoundAlertOpen(true)
      return setTimeout(() => {
        setIsWordNotFoundAlertOpen(false)
      }, ALERT_TIME_MS)
    }

    const winningWord = isWinningWord(currentGuess)

    if (
      splitter.splitGraphemes(currentGuess).length === 5 &&
      guesses.length < 6 &&
      !isGameWon
    ) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess('')

      if (winningWord) {
        setStats(addStatsForCompletedGame(stats, guesses.length))
        return setIsGameWon(true)
      }

      if (guesses.length === 5) {
        setStats(addStatsForCompletedGame(stats, guesses.length + 1))
        setIsGameLost(true)
      }
    }
  }

  return (
    <div
      className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8"
      dir={language === 'ENGLISH' ? 'ltr' : 'rtl'}
    >
      <div className="flex w-80 mx-auto items-center mb-8 mt-12" dir="rtl">
        <h1 className="text-xl grow font-bold dark:text-white">
          {GAME_TITLE(language)}
        </h1>
        <SunIcon
          className="h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => handleDarkMode(!isDarkMode)}
        />
        <InformationCircleIcon
          className="h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <ChartBarIcon
          className="h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() => setIsStatsModalOpen(true)}
        />
        <TranslateIcon
          className="h-6 w-6 cursor-pointer dark:stroke-white"
          onClick={() =>
            handleLanguage(language === 'YIDDISH' ? 'ENGLISH' : 'YIDDISH')
          }
        />
      </div>
      <div dir="rtl">
        <Grid guesses={guesses} currentGuess={currentGuess} />
      </div>
      <Keyboard
        onChar={onChar}
        onDelete={onDelete}
        onEnter={onEnter}
        guesses={guesses}
        language={language}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
        language={language}
      />
      <StatsModal
        isOpen={isStatsModalOpen}
        handleClose={() => setIsStatsModalOpen(false)}
        guesses={guesses}
        gameStats={stats}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        handleShare={() => {
          setIsGameCopiedAlertOpen(true)
          return setTimeout(
            () => setIsGameCopiedAlertOpen(false),
            ALERT_TIME_MS
          )
        }}
        language={language}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        handleClose={() => setIsAboutModalOpen(false)}
        language={language}
      />

      <button
        type="button"
        className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
        onClick={() => setIsAboutModalOpen(true)}
      >
        {ABOUT_GAME_MESSAGE(language)}
      </button>

      <Alert
        message={NOT_ENOUGH_LETTERS_MESSAGE(language)}
        isOpen={isNotEnoughLetters}
      />
      <Alert
        message={WORD_NOT_FOUND_MESSAGE(language)}
        isOpen={isWordNotFoundAlertOpen}
      />
      <Alert
        message={CORRECT_WORD_MESSAGE(solution, language)}
        isOpen={isGameLost}
      />
      <Alert
        message={WIN_MESSAGES(language, guesses.length)}
        isOpen={isGameWonAlertOpen}
        variant="success"
      />
      <Alert
        message={GAME_COPIED_MESSAGE(language)}
        isOpen={isGameCopiedAlertOpen}
        variant="success"
      />
    </div>
  )
}

export default App

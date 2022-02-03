import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { Language } from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  language: Language
}

export const InfoModal = ({ isOpen, handleClose, language }: Props) => {
  if (language === 'YIDDISH') {
    return (
      <BaseModal
        title="װי אַזױ צו שפּילן"
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <p className="text-sm text-gray-500 dark:text-gray-300">
          טרעפֿן דאָס וואָרט אין זעקס פּרוּוון. נאָך יעדן טרעףֿ די קאָלירן פֿון
          די קאַכלען וועלן זיך בייַטן צו ווייַזן ווי נאָענט דער טרעףֿ איז געווען
          צו דעם ריכטיקע וואָרט.
        </p>

        <div className="flex justify-center mb-1 mt-4">
          <Cell value="ש" />
          <Cell value="נ" />
          <Cell value="י" />
          <Cell value="ר" />
          <Cell value="ל" status="correct" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          דער אות <strong>ל</strong> איז אין דעם וואָרט און אין דעם ריכטיקן
          אָרט.
        </p>

        <div className="flex justify-center mb-1 mt-4">
          <Cell value="ב" />
          <Cell value="י" />
          <Cell value="נ" status="present" />
          <Cell value="ט" />
          <Cell value="ל" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          דער אות <strong>נ</strong> איז אין דעם וואָרט אָבער נישט אין דעם
          ריכטיקן אָרט.
        </p>

        <div className="flex justify-center mb-1 mt-4">
          <Cell value="אַ" />
          <Cell value="ט" status="absent" />
          <Cell value="אַ" />
          <Cell value="ק" />
          <Cell value="ע" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          דער אות <strong>ט</strong> איז נישט אין דעם וואָרט.
        </p>
      </BaseModal>
    )
  } else {
    return (
      <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
        <div dir="ltr">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Guess the wordle in six guesses.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            After each guess, the color of the tiles will change to show how
            close your guess was to the secret word.
          </p>

          <div className="flex justify-center mb-1 mt-4" dir="rtl">
            <Cell value="ש" />
            <Cell value="נ" />
            <Cell value="י" />
            <Cell value="ר" />
            <Cell value="ל" status="correct" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            The letter <strong>ל</strong> is in the word and in the correct
            spot.
          </p>

          <div className="flex justify-center mb-1 mt-4" dir="rtl">
            <Cell value="ב" />
            <Cell value="י" />
            <Cell value="נ" status="present" />
            <Cell value="ט" />
            <Cell value="ל" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            The letter <strong>נ</strong> is in the word but in the wrong spot.
          </p>

          <div className="flex justify-center mb-1 mt-4" dir="rtl">
            <Cell value="אַ" />
            <Cell value="ט" status="absent" />
            <Cell value="אַ" />
            <Cell value="ק" />
            <Cell value="ע" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            The letter <strong>ע</strong> is not in the word in any spot.
          </p>
        </div>
      </BaseModal>
    )
  }
}

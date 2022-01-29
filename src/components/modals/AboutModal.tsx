import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="וועגן ווערטל" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ווערטל ניצט אן אָפֿנקאָדיק ווערסיע פֿון דער שפּיל Wordle. -{' '}
        <a
          href="https://github.com/gbear605/wordle-yiddish"
          className="underline font-bold"
        >
          מען קען זען דעם קאָד דאָ
        </a>{' '}
        און{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          שפּילן דעם אָריגינאָל דאָ
        </a>
        .
      </p>
      <p className="text-sm text-gray-500">
        יעדער קלאַוויש איז איין אות. למושל וו איז איין אות און נישט צוויי.
        צאַַצקען זיך מיט דעם!
      </p>

      <p className="text-sm text-gray-500" dir="ltr">
        This is an open source clone of the game Wordle in Yiddish -{' '}
        <a
          href="https://github.com/gbear605/wordle-yiddish"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play the original here
        </a>
        . It is based on{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          this clone of Wordle
        </a>{' '}
        by{' '}
        <a href="https://github.com/hannahcode" className="underline font-bold">
          Hannah Park
        </a>
        . The words used, licensed under CC BY-SA 3.0, are a combination of the
        Yiddish lemmas created by the editors of{' '}
        <a href="https://en.wiktionary.org/" className="underline font-bold">
          English Wiktionary
        </a>{' '}
        and{' '}
        <a
          href="https://raw.githubusercontent.com/urieli/jochre/4613d79d72a10d8b67258f7e60bf0740c9e26b71/jochre_yiddish/resources/lexicons/yiddish-lebt-spellchecker.txt"
          className="underline font-bold"
        >
          the spellchecking dictionary
        </a>{' '}
        created and actualized by Simcha Taub of the ייִדיש לעבט project and
        updated by Assaf Urieli.
      </p>
    </BaseModal>
  )
}

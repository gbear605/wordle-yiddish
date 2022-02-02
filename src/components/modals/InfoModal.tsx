import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="כּללים פֿאַר שפּילן"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        טרעפֿט דאָס װערטל מיט נישט מער װי זעקס טרעפֿן. נאָך יעדן טרעף, וועלן די
        קאָלירן פֿון די קאַכלען אײַך ווײַזן ווי נאָענט דער טרעף איז צום ריכטיקן
        װאָרט.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ש" />
        <Cell value="נ" />
        <Cell value="י" />
        <Cell value="ר" />
        <Cell value="ל" status="correct" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        דער אות ל איז אין דעם וואָרט און אין דעם ריכטיקן אָרט.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ב" />
        <Cell value="י" />
        <Cell value="נ" status="present" />
        <Cell value="ט" />
        <Cell value="ל" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        דער אות נ איז אין דעם וואָרט אָבער נישט אין דעם ריכטיקן אָרט.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="אַ" />
        <Cell value="ט" status="absent" />
        <Cell value="אַ" />
        <Cell value="ק" />
        <Cell value="ע" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        דער אות ט איז נישט אין דעם וואָרט.
      </p>
    </BaseModal>
  )
}

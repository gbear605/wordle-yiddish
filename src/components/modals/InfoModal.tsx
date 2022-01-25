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
      <p className="text-sm text-gray-500">
        טרעפֿן דאָס וואָרט אין זעקס פּרוּוון. נאָך יעדן טרעףֿ די קאָלירן פֿון די
        קאַכלען וועלן זיך בייַטן צו ווייַזן ווי נאָענט דער טרעףֿ איז געווען צו
        דעם ריכטיקע וואָרט.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ל" status="correct" />
        <Cell value="ר" />
        <Cell value="י" />
        <Cell value="נ" />
        <Cell value="ש" />
      </div>
      <p className="text-sm text-gray-500">
        דער אות ל איז אין דעם וואָרט און אין דעם ריכטיקן אָרט.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ל" />
        <Cell value="ט" />
        <Cell value="נ" status="present" />
        <Cell value="י" />
        <Cell value="ב" />
      </div>
      <p className="text-sm text-gray-500">
        דער אות נ איז אין דעם וואָרט אָבער נישט אין דעם ריכטיקן אָרט.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ע" />
        <Cell value="ק" />
        <Cell value="אַ" />
        <Cell value="ט" status="absent" />
        <Cell value="אַ" />
      </div>
      <p className="text-sm text-gray-500">
        דער אות ט איז נישט אין דעם וואָרט.
      </p>
    </BaseModal>
  )
}

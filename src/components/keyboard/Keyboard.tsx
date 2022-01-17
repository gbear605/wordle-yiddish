import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="כּ" onClick={onClick} status={charStatuses['כּ']} />
        <Key value="ש" onClick={onClick} status={charStatuses['ש']} />
        <Key value="ע" onClick={onClick} status={charStatuses['ע']} />
        <Key value="ר" onClick={onClick} status={charStatuses['ר']} />
        <Key value="ט" onClick={onClick} status={charStatuses['ט']} />
        <Key value="ײַ" onClick={onClick} status={charStatuses['ײַ']} />
        <Key value="ו" onClick={onClick} status={charStatuses['ו']} />
        <Key value="י" onClick={onClick} status={charStatuses['י']} />
        <Key value="אָ" onClick={onClick} status={charStatuses['אָ']} />
        <Key value="פּ" onClick={onClick} status={charStatuses['פּ']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="אַ" onClick={onClick} status={charStatuses['אַ']} />
        <Key value="ס" onClick={onClick} status={charStatuses['ס']} />
        <Key value="ד" onClick={onClick} status={charStatuses['ד']} />
        <Key value="פֿ" onClick={onClick} status={charStatuses['פֿ']} />
        <Key value="ג" onClick={onClick} status={charStatuses['ג']} />
        <Key value="ה" onClick={onClick} status={charStatuses['ה']} />
        <Key value="ײ" onClick={onClick} status={charStatuses['ײ']} />
        <Key value="ק" onClick={onClick} status={charStatuses['ק']} />
        <Key value="ל" onClick={onClick} status={charStatuses['ל']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="ז" onClick={onClick} status={charStatuses['ז']} />
        <Key value="כ" onClick={onClick} status={charStatuses['כ']} />
        <Key value="צ" onClick={onClick} status={charStatuses['צ']} />
        <Key value="װ" onClick={onClick} status={charStatuses['װ']} />
        <Key value="ב" onClick={onClick} status={charStatuses['ב']} />
        <Key value="נ" onClick={onClick} status={charStatuses['נ']} />
        <Key value="מ" onClick={onClick} status={charStatuses['מ']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
          <br />
          אַרייַן
        </Key>
        <Key value="תּ" onClick={onClick} status={charStatuses['תּ']} />
        <Key value="ױ" onClick={onClick} status={charStatuses['ױ']} />
        <Key value="א" onClick={onClick} status={charStatuses['א']} />
        <Key value="ת" onClick={onClick} status={charStatuses['ת']} />
        <Key value="ח" onClick={onClick} status={charStatuses['ח']} />
        <Key value="בֿ" onClick={onClick} status={charStatuses['בֿ']} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
          <br />
          אויסמעק
        </Key>
      </div>
    </div>
  )
}

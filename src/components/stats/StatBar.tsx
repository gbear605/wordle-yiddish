import { GameStats } from '../../lib/localStorage'

type Props = {
  gameStats: GameStats
}

const StatItem = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => {
  return (
    <div className="items-center justify-center m-1 w-1/4">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}

export const StatBar = ({ gameStats }: Props) => {
  return (
    <div className="flex justify-center my-2">
      <StatItem label="געשפּילט" value={gameStats.totalGames} />
      <StatItem label="נצחון %" value={`${gameStats.successRate}%`} />
      <StatItem label="איצטיקער נאָכאַנאַנד" value={gameStats.currentStreak} />
      <StatItem label="בעסטער נאָכאַנאַנד" value={gameStats.bestStreak} />
    </div>
  )
}

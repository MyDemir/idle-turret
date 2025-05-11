type HudProps = {
  health: number
  gold: number
  wave: number
}

export default function Hud({ health, gold, wave }: HudProps) {
  return (
    <div className="absolute top-4 left-4 bg-black/60 text-white p-4 rounded-xl shadow-lg">
      <div>Can: {health}</div>
      <div>Altın: {gold}</div>
      <div>Dalga: {wave}</div>
    </div>
  )
}

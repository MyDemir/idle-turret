import './App.css'
import HUD from './components/HUD'

const App = () => {
  return (
    <div className="app relative w-full h-screen">
      <HUD health={100} gold={500} wave={1} />
      <main className="game-area p-4">
        <div className="turret-zone border border-white p-4 mb-4">Taret Alanı</div>
        <div className="enemy-zone border border-red-500 p-4">Düşman Alanı</div>
      </main>
    </div>
  )
}

export default App

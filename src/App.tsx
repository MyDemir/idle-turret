import './App.css'
import HUD from "./components/HUD";

const App = () => {
  return (
    <div className="app relative w-full h-screen bg-gray-900">
      <HUD />
      <main className="game-area p-4">
        <div className="turret-zone border border-white p-2 mb-4">Taret buraya gelecek</div>
        <div className="enemy-zone border border-red-500 p-2">Düşmanlar buraya gelecek</div>
      </main>
    </div>
  )
}

export default App;

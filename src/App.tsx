import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <header className="hud">
        <h1>Idle Turret</h1>
        <div className="stats">
          <span>Altın: 0</span>
          <span>Skor: 0</span>
        </div>
      </header>
      <main className="game-area">
        <div className="turret-zone">Taret buraya gelecek</div>
        <div className="enemy-zone">Düşmanlar burada olacak</div>
      </main>
    </div>
  )
}

export default App

import './App.css';
import { useState } from 'react';
import EnemyZone from './components/EnemyZone'; 
// EnemyZone bileşenini ekliyoruz
const App = () => {
  const warriors = ['🚀', '🛡️', '⚔️', '🎯', '🛡️', '⚔️', '🚀'];
  const [wave, setWave] = useState(1);
  const [health, setHealth] = useState(100);

  return (
    <div className="app">
      <div className="hud">
        <div className="hud-item">
          <span className="hud-icon">❤️</span>
          <span>Can: {health}</span>
        </div>
        <div className="hud-item">
          <span className="hud-icon">🪙</span>
          <span>Altın: 500</span>
        </div>
        <div className="hud-item">
          <span className="hud-icon">🌊</span>
          <span>Dalga: {wave}</span>
        </div>
      </div>

      <EnemyZone updateWave={setWave} updateHealth={setHealth} />

      <div className="turret-zone">
        {warriors.map((warrior, index) => (
          <div key={index} className="turret-cell front-row">
            <span className="warrior">{warrior}</span>
          </div>
        ))}
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className="turret-cell back-row"></div>
        ))}
      </div>
    </div>
  );
};

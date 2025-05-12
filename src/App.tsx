import './App.css';
import { useState, useEffect } from 'react';
import EnemyZone from './components/EnemyZone';
import TurretZone from './components/TurretZone';

const App = () => {
  const warriors = ['🚀', '🛡️', '⚔️', '🎯', '🛡️', '⚔️', '🚀'];
  const [wave, setWave] = useState(1);
  const [health, setHealth] = useState(100);
  const [enemies, setEnemies] = useState<any[]>([]);

  // Can sıfıra düştüğünde oyun sonlanır
  useEffect(() => {
    if (health <= 0) {
      alert("Oyun Bitti!"); // Geçici oyun sonu ekranı
      // Yeniden başlatma için bir buton gösterebilirsiniz.
    }
  }, [health]);

  return (
    <div className="app">
      <div className="hud">
        <div className="hud-item">
          <span className="hud-icon">❤️</span>
          <span>Can: {health}</span>
        </div>
        <div className="hud-item">
          <span className="hud-icon">💰</span>
          <span>Altın: 500</span>
        </div>
        <div className="hud-item">
          <span className="hud-icon">🌊</span>
          <span>Dalga: {wave}</span>
        </div>
      </div>

      <EnemyZone updateWave={setWave} updateHealth={setHealth} enemies={enemies} setEnemies={setEnemies} />

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

export default App;

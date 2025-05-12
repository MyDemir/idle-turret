import './App.css';
import EnemyZone from './components/EnemyZone'; // EnemyZone bileşenini ekliyoruz

const App = () => {
  const warriors = ['🚀', '🛡️', '⚔️', '🎯', '🛡️', '⚔️', '🚀']; // İlk 7 için savaşçı emojiler
  return (
    <div className="app">
      {/* HUD Alanı */}
      <div className="hud">
        <div className="hud-item">
          <span className="hud-icon">❤️</span>
          <span>Can: 100</span>
        </div>
        <div className="hud-item">
          <span className="hud-icon">🪙</span>
          <span>Altın: 500</span>
        </div>
        <div className="hud-item">
          <span className="hud-icon">🌊</span>
          <span>Dalga: 1</span>
        </div>
      </div>

      {/* Düşman Alanı */}
      <EnemyZone /> {/* Dinamik düşman alanı burada çağrılıyor */}

      {/* Kule Alanı */}
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

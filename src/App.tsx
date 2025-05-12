import './App.css';

const App = () => {
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
      <div className="enemy-zone">
        <p>Düşmanlar buraya gelecek</p>
      </div>

      {/* Kule Alanı */}
      <div className="turret-zone">
        {Array.from({ length: 21 }).map((_, index) => (
          <div
            key={index}
            className={`turret-cell ${index < 7 ? 'front-row' : 'back-row'}`}
          >
            {/* Kule veya boş alan */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

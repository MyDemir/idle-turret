import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* HUD */}
      <div className="hud">
        <div>Can: 100</div>
        <div>Altın: 500</div>
        <div>Dalga: 1</div>
      </div>

      {/* Oyun Alanı */}
      <div className="game-area">
        {/* Kule Alanı */}
        <div className="turret-zone">
          <p>Kule Alanı</p>
        </div>

        {/* Düşman Alanı */}
        <div className="enemy-zone">
          <p>Düşman Alanı</p>
        </div>
      </div>
    </div>
  );
};

export default App;

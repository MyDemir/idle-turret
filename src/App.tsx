import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* HUD Alanı */}
      <div className="hud">
        <div>Can: 100</div>
        <div>Altın: 500</div>
        <div>Dalga: 1</div>
      </div>

      {/* Düşman Alanı */}
      <div className="enemy-zone">
        <p>Düşmanlar buraya gelecek</p>
      </div>

      {/* Kule Alanı */}
      <div className="turret-zone">
        {Array.from({ length: 21 }).map((_, index) => (
          <div key={index} className="turret-cell">
            {/* Kule veya boş alan */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

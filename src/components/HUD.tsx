const HUD = ({ health, gold, wave }: { health: number; gold: number; wave: number }) => {
  return (
    <div className="hud">
      {/* Sağlık Bilgisi */}
      <div className="hud-item">
        <span className="hud-icon">❤️</span>
        <span>Can: {health}</span>
      </div>

      {/* Altın Bilgisi */}
      <div className="hud-item">
        <span className="hud-icon">🪙</span>
        <span>Altın: {gold}</span>
      </div>

      {/* Dalga Bilgisi */}
      <div className="hud-item">
        <span className="hud-icon">🌊</span>
        <span>Dalga: {wave}</span>
      </div>
    </div>
  );
};

export default HUD;

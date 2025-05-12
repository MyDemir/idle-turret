import React, { useState, useEffect } from 'react';
import './EnemyZone.css'; // CSS düzenlemeleri

// Düşman Tipi
type Enemy = {
  id: number;
  health: number;
  position: { x: number; y: number }; // x, y pozisyonları
  status: 'alive' | 'dead';
};

const EnemyZone = () => {
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [wave, setWave] = useState(1); // Dalga numarası

  const spawnEnemies = () => {
    const newEnemies = Array.from({ length: wave * 3 }, (_, index) => ({
      id: index,
      health: 100 + wave * 10, // Dalga numarasına göre can artışı
      position: { x: Math.floor(Math.random() * 7), y: 0 }, // Yukarıda başlar
      status: 'alive',
    }));
    setEnemies(newEnemies);
  };

  useEffect(() => {
    // Yeni dalga başladığında düşmanları yarat
    spawnEnemies();

    // Hareket Mekanizması
    const interval = setInterval(() => {
      setEnemies((prev) =>
        prev.map((enemy) =>
          enemy.status === 'alive'
            ? {
                ...enemy,
                position: { ...enemy.position, y: enemy.position.y + 1 }, // Aşağı hareket
              }
            : enemy
        )
      );
    }, 1000); // Her saniyede bir hareket

    return () => clearInterval(interval); // Temizleme
  }, [wave]);

  const nextWave = () => {
    // Dalga numarasını artır ve yeni düşmanlar yarat
    setWave((prevWave) => prevWave + 1);
  };

  return (
    <div>
      <div className="enemy-zone">
        {enemies.map((enemy) => (
          <div
            key={enemy.id}
            className={`enemy ${enemy.status}`}
            style={{
              transform: `translate(${enemy.position.x * 50}px, ${
                enemy.position.y * 50
              }px)`,
            }}
          >
            <div className="enemy-health">{enemy.health}</div>
          </div>
        ))}
      </div>
      <button onClick={nextWave} className="next-wave-btn">
        Next Wave
      </button>
    </div>
  );
};

export default EnemyZone;

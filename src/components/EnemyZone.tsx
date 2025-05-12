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

  useEffect(() => {
    // Yeni düşmanları başlat
    const newEnemies = Array.from({ length: 5 }, (_, index) => ({
      id: index,
      health: 100,
      position: { x: Math.floor(Math.random() * 7), y: 0 }, // İlk olarak yukarıda başlar
      status: 'alive',
    }));
    setEnemies(newEnemies);

    // Hareket Mekanizması
    const interval = setInterval(() => {
      setEnemies((prev) =>
        prev.map((enemy) =>
          enemy.status === 'alive'
            ? {
                ...enemy,
                position: { ...enemy.position, y: enemy.position.y + 1 }, // Aşağıya hareket
              }
            : enemy
        )
      );
    }, 1000); // Her 1 saniyede bir hareket

    return () => clearInterval(interval); // Temizleme
  }, []);

  return (
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
  );
};

export default EnemyZone;

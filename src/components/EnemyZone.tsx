import React, { useState, useEffect } from 'react';
import './EnemyZone.css'; // CSS dosyasıyla düşmanların hareketini görselleştirmek için

// Düşman Tipi
type Enemy = {
  id: number;
  health: number;
  position: { x: number; y: number }; // x, y pozisyonları
  status: 'alive' | 'dead';
};

const EnemyZone = () => {
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const columns = 7; // Grid sütun sayısı
  const rows = 3; // Grid satır sayısı

  // Yeni düşmanlar oluştur
  const spawnEnemies = () => {
    const newEnemies = Array.from({ length: 5 }, (_, index) => ({
      id: index,
      health: 100, // Varsayılan can
      position: {
        x: Math.floor(Math.random() * columns),
        y: Math.floor(Math.random() * rows),
      },
      status: 'alive',
    }));
    setEnemies(newEnemies);
  };

  useEffect(() => {
    spawnEnemies();
  }, []);

  return (
    <div className="enemy-zone">
      {enemies.map((enemy) => (
        <div
          key={enemy.id}
          className={`enemy ${enemy.status}`}
          style={{
            transform: `translate(${enemy.position.x * 60}px, ${
              enemy.position.y * 60
            }px)`,
          }}
        >
          <div className="enemy-health" title={`Health: ${enemy.health}`}>
            {enemy.health}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnemyZone;

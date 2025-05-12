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

  const gridWidth = 7; // Grid sütun sayısı
  const gridHeight = 10; // Grid satır sayısı

  useEffect(() => {
    // Dalga sistemi için bir zamanlayıcı ayarla
    const waveInterval = setInterval(() => {
      setWave((prevWave) => prevWave + 1); // Dalga numarasını artır
    }, 10000); // Her 10 saniyede bir dalga

    return () => clearInterval(waveInterval); // Temizleme
  }, []);

  useEffect(() => {
    // Her dalga için düşmanları yarat
    const newEnemies = Array.from({ length: wave * 3 }, (_, index) => ({
      id: index,
      health: 100 + wave * 10, // Dalga numarasına göre can artışı
      position: {
        x: Math.floor(Math.random() * gridWidth), // Rastgele sütun
        y: 0, // Yukarıdan başlar
      },
      status: 'alive',
    }));
    setEnemies(newEnemies);
  }, [wave]);

  useEffect(() => {
    // Hareket Mekanizması
    const movementInterval = setInterval(() => {
      setEnemies((prev) =>
        prev.map((enemy) =>
          enemy.status === 'alive' && enemy.position.y < gridHeight - 1
            ? {
                ...enemy,
                position: { ...enemy.position, y: enemy.position.y + 1 }, // Aşağı hareket
              }
            : enemy
        )
      );
    }, 1000); // Her saniyede bir hareket

    return () => clearInterval(movementInterval); // Temizleme
  }, [enemies]);

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

import React, { useState, useEffect } from 'react';
import './EnemyZone.css';

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
    const screenWidth = window.innerWidth; // Ekran genişliği
    const newEnemies = Array.from({ length: wave * 5 }, (_, index) => ({
      id: index,
      health: 100 + wave * 10, // Dalga numarasına göre can artışı
      position: { 
        x: Math.random() * screenWidth, // Ekranın rastgele bir noktasında doğar
        y: 0 // Yukarıdan başlar
      },
      status: 'alive',
    }));
    setEnemies(newEnemies);
  };

  useEffect(() => {
    // İlk dalgayı başlat
    spawnEnemies();

    // Dalga döngüsü
    const waveInterval = setInterval(() => {
      setWave((prevWave) => prevWave + 1); // Dalga numarasını artır
      spawnEnemies(); // Yeni dalga düşmanlarını yarat
    }, 10000); // Her 10 saniyede bir yeni dalga

    // Düşman hareketi
    const moveInterval = setInterval(() => {
      setEnemies((prevEnemies) =>
        prevEnemies
          .map((enemy) =>
            enemy.status === 'alive'
              ? {
                  ...enemy,
                  position: { ...enemy.position, y: enemy.position.y + 5 } // Kulelere doğru hareket
                }
              : enemy
          )
          .filter((enemy) => enemy.position.y < window.innerHeight) // Ekranı terk edenleri temizle
      );
    }, 50); // Daha akıcı bir hareket için düşük süre

    return () => {
      clearInterval(waveInterval);
      clearInterval(moveInterval);
    };
  }, [wave]);

  return (
    <div className="enemy-zone">
      {enemies.map((enemy) => (
        <div
          key={enemy.id}
          className={`enemy ${enemy.status}`}
          style={{
            left: `${enemy.position.x}px`, // Dinamik x pozisyonu
            top: `${enemy.position.y}px`, // Dinamik y pozisyonu
          }}
        >
          <div className="enemy-health">{enemy.health}</div>
        </div>
      ))}
    </div>
  );
};

export default EnemyZone;

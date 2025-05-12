import React, { useState, useEffect } from 'react';
import './EnemyZone.css';

// Düşman Tipi
type Enemy = {
  id: number;
  health: number;
  position: { x: number; y: number }; // x, y pozisyonları
  target: { x: number; y: number }; // Hedef pozisyon
  status: 'alive' | 'dead';
};

const EnemyZone = ({ updateWave }: { updateWave: (wave: number) => void }) => {
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [wave, setWave] = useState(1); // Dalga numarası

  const spawnEnemies = () => {
    const screenWidth = window.innerWidth; // Ekran genişliği
    const turretZoneHeight = 100; // Kule alanının yüksekliği
    const turretZoneWidth = screenWidth; // Kule alanının genişliği

    const newEnemies = Array.from({ length: wave * 5 }, (_, index) => ({
      id: index,
      health: 100 + wave * 10, // Dalga numarasına göre can artışı
      position: {
        x: Math.random() * screenWidth, // Ekranın rastgele bir noktasında doğar
        y: 0, // Yukarıdan başlar
      },
      target: {
        x: Math.random() * turretZoneWidth, // Kule alanındaki rastgele x noktası
        y: window.innerHeight - turretZoneHeight, // Kule alanının y pozisyonu
      },
      status: 'alive',
    }));
    setEnemies(newEnemies);
  };

  useEffect(() => {
    // İlk dalgayı başlat
    spawnEnemies();
    updateWave(wave); // HUD'da dalga sayısını güncelle

    // Dalga döngüsü
    const waveInterval = setInterval(() => {
      setWave((prevWave) => {
        const nextWave = prevWave + 1;
        updateWave(nextWave); // HUD'da dalga sayısını güncelle
        spawnEnemies(); // Yeni dalga düşmanlarını yarat
        return nextWave;
      });
    }, 10000); // Her 10 saniyede bir yeni dalga

    // Düşman hareketi
    const moveInterval = setInterval(() => {
      setEnemies((prevEnemies) =>
        prevEnemies.map((enemy) => {
          if (enemy.status !== 'alive') return enemy;

          // Hedefe doğru hareket
          const dx = enemy.target.x - enemy.position.x;
          const dy = enemy.target.y - enemy.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy); // Hedefe olan mesafe

          // Eğer hedefe ulaştıysa dur
          if (distance < 5) {
            return { ...enemy, status: 'dead' };
          }

          const speed = 2; // Düşmanın hareket hızı
          return {
            ...enemy,
            position: {
              x: enemy.position.x + (dx / distance) * speed,
              y: enemy.position.y + (dy / distance) * speed,
            },
          };
        })
      );
    }, 50); // Daha akıcı bir hareket için düşük süre

    return () => {
      clearInterval(waveInterval);
      clearInterval(moveInterval);
    };
  }, [wave, updateWave]);

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

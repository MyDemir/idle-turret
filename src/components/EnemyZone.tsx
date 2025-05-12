import React, { useState, useEffect } from 'react';
import './EnemyZone.css';

// Düşman Türleri
const enemyTypes = [
  { type: 'basic', color: 'red', health: 100, speed: 2 },
  { type: 'fast', color: 'blue', health: 70, speed: 4 },
  { type: 'tank', color: 'green', health: 200, speed: 1 },
  { type: 'sniper', color: 'purple', health: 120, speed: 2.5 },
  { type: 'explosive', color: 'orange', health: 80, speed: 2 },
  { type: 'healer', color: 'pink', health: 150, speed: 1.5 },
  { type: 'boss', color: 'black', health: 500, speed: 1 },
];

// Düşman Tipi
type Enemy = {
  id: number;
  type: string;
  health: number;
  position: { x: number; y: number }; // x, y pozisyonları
  target: { x: number; y: number }; // Hedef pozisyon
  color: string;
  speed: number;
  status: 'alive' | 'dead';
};

const EnemyZone = ({ updateWave }: { updateWave: (wave: number) => void }) => {
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [wave, setWave] = useState(1); // Dalga numarası

  // Yeni düşmanları yarat
  const spawnEnemies = () => {
    const screenWidth = window.innerWidth; // Ekran genişliği
    const turretZoneHeight = 100; // Kule alanının yüksekliği
    const turretZoneWidth = screenWidth; // Kule alanının genişliği

    const newEnemies = Array.from({ length: wave * 5 }, (_, index) => {
      // Rastgele bir düşman türü seç
      const enemyType = enemyTypes[Math.min(wave - 1, enemyTypes.length - 1)]; // Dalga sayısına göre tür seçimi

      return {
        id: index,
        type: enemyType.type,
        health: enemyType.health,
        position: {
          x: Math.random() * screenWidth, // Ekranın rastgele bir noktasında doğar
          y: Math.random() * (window.innerHeight / 2), // Yukarıdan rastgele bir noktada başlar
        },
        target: {
          x: Math.random() * turretZoneWidth, // Kule alanındaki rastgele x noktası
          y: window.innerHeight - turretZoneHeight, // Kule alanının y pozisyonu
        },
        color: enemyType.color, // Türden gelen renk
        speed: enemyType.speed, // Türden gelen hız
        status: 'alive',
      };
    });

    setEnemies(newEnemies);
  };

  // Düşmanların durumunu kontrol et
  const checkEnemiesStatus = () => {
    const allDead = enemies.every((enemy) => enemy.status === 'dead');
    if (allDead) {
      // Eğer tüm düşmanlar öldüyse, yeni dalgayı başlat
      setWave((prevWave) => {
        const nextWave = prevWave + 1;
        updateWave(nextWave); // HUD'da dalga sayısını güncelle
        spawnEnemies(); // Yeni dalga düşmanlarını yarat
        return nextWave;
      });
    }
  };

  useEffect(() => {
    // İlk dalgayı başlat
    spawnEnemies();

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

          return {
            ...enemy,
            position: {
              x: enemy.position.x + (dx / distance) * enemy.speed,
              y: enemy.position.y + (dy / distance) * enemy.speed,
            },
          };
        })
      );
    }, 50); // Daha akıcı bir hareket için düşük süre

    return () => {
      clearInterval(moveInterval);
    };
  }, [enemies]);

  // Düşmanların durumunu sürekli kontrol et
  useEffect(() => {
    checkEnemiesStatus();
  }, [enemies]);

  return (
    <div className="enemy-zone">
      {enemies.map((enemy) => (
        <div
          key={enemy.id}
          className={`enemy ${enemy.status}`}
          style={{
            left: `${enemy.position.x}px`, // Dinamik x pozisyonu
            top: `${enemy.position.y}px`, // Dinamik y pozisyonu
            backgroundColor: enemy.color, // Türden gelen renk
          }}
        >
          <div className="enemy-health">{enemy.health}</div>
        </div>
      ))}
    </div>
  );
};

export default EnemyZone;

import React, { useState, useEffect } from 'react';

// Düşman Tipi
type Enemy = {
  id: number;
  health: number;
  position: { x: number; y: number };
  status: 'alive' | 'dead';
};

const EnemyZone = () => {
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const columns = 7; // Grid sütun sayısı
  const rows = 3; // Grid satır sayısı
  const [wave, setWave] = useState(1); // Dalga numarası

  // Dalga Sistemine Göre Düşmanları Oluştur
  const spawnEnemies = () => {
    let newEnemies: Enemy[] = [];
    if (wave % 2 === 1) {
      // Sabit pozisyonlu düşmanlar
      newEnemies = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        health: 100,
        position: { x: index % columns, y: Math.floor(index / columns) },
        status: 'alive',
      }));
    } else {
      // Rastgele pozisyonlu düşmanlar
      newEnemies = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        health: 100,
        position: {
          x: Math.floor(Math.random() * columns),
          y: Math.floor(Math.random() * rows),
        },
        status: 'alive',
      }));
    }
    setEnemies(newEnemies);
  };

  // Dalga Değişimlerini İzle
  useEffect(() => {
    spawnEnemies(); // Yeni dalga düşmanlarını oluştur
  }, [wave]);

  // Dalga Atlamalarını Simüle Et
  const nextWave = () => {
    setWave((prevWave) => prevWave + 1);
  };

  return (
    <div>
      <div className={`grid grid-cols-${columns} gap-2`}>
        {Array.from({ length: columns * rows }).map((_, index) => (
          <div
            key={index}
            className="w-12 h-12 bg-gray-800 border border-gray-500 rounded relative"
          >
            {/* Düşman yerleştirme */}
            {enemies.map(
              (enemy) =>
                Math.floor(enemy.position.x) === index % columns &&
                Math.floor(enemy.position.y) === Math.floor(index / columns) &&
                enemy.status === 'alive' && (
                  <div
                    key={enemy.id}
                    className="w-full h-full bg-red-500 rounded"
                    title={`Health: ${enemy.health}`}
                  />
                )
            )}
          </div>
        ))}
      </div>
      <button
        onClick={nextWave}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Next Wave
      </button>
    </div>
  );
};

export default EnemyZone;

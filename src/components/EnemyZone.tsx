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

  // Yeni düşmanlar oluştur
  const spawnEnemies = (count: number) => {
    const newEnemies = Array.from({ length: count }, (_, index) => ({
      id: index,
      health: 100, // Varsayılan can
      position: { x: Math.random() * 7, y: Math.random() * 3 }, // Rastgele bir pozisyon
      status: 'alive',
    }));
    setEnemies(newEnemies);
  };

  // İlk yüklemede düşmanları oluştur
  useEffect(() => {
    spawnEnemies(10); // 10 düşman oluştur
  }, []);

  return (
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
  );
};

export default EnemyZone;

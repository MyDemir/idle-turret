import React, { useEffect } from 'react';

const TurretZone = ({ enemies, setEnemies }: { enemies: any[]; setEnemies: (enemies: any[]) => void }) => {
  const columns = 7;
  const rows = 3;

  const attackEnemies = () => {
    setEnemies((prevEnemies) =>
      prevEnemies.map((enemy) => {
        if (enemy.status === 'alive') {
          return { ...enemy, health: enemy.health - 10 }; // Kule düşmana hasar verir
        }
        return enemy;
      })
    );
  };

  useEffect(() => {
    const attackInterval = setInterval(attackEnemies, 1000); // Her saniyede bir saldırı
    return () => clearInterval(attackInterval);
  }, []);

  return (
    <div className={`grid grid-cols-${columns} gap-2`}>
      {Array.from({ length: columns * rows }).map((_, index) => (
        <div
          key={index}
          className="w-12 h-12 border border-white flex items-center justify-center bg-gray-800 hover:bg-gray-700"
        >
          {/* Kule buraya yerleştirilecek */}
          🚀
        </div>
      ))}
    </div>
  );
};

export default TurretZone;

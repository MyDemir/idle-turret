import React, { useEffect } from 'react';
import './TurretZone.css'; // Yeni stil dosyasını import edin

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
          className="turret-cell"
        >
          {/* Kule buraya yerleştirilecek */}
        </div>
      ))}
    </div>
  );
};

export default TurretZone;

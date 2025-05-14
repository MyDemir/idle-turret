import React, { useEffect, useState } from 'react';
import './EnemyZone.css';

const enemyTypes = [
  { type: 'basic', color: 'red', health: 100, speed: 2 },
  { type: 'fast', color: 'blue', health: 70, speed: 4 },
  { type: 'tank', color: 'green', health: 200, speed: 1 },
  { type: 'sniper', color: 'purple', health: 120, speed: 2.5 },
  { type: 'explosive', color: 'orange', health: 80, speed: 2 },
  { type: 'healer', color: 'pink', health: 150, speed: 1.5 },
  { type: 'boss', color: 'black', health: 500, speed: 1 },
];

const EnemyZone = ({ updateWave, updateHealth, enemies, setEnemies }: { updateWave: (wave: number) => void; updateHealth: (health: number) => void; enemies: any[]; setEnemies: (enemies: any[]) => void }) => {
  const [wave, setWave] = useState(1);

  const spawnEnemies = () => {
    const newEnemies = Array.from({ length: wave * 5 }, (_, index) => {
      const enemyType = enemyTypes[Math.min(wave - 1, enemyTypes.length - 1)];
      return {
        id: index,
        type: enemyType.type,
        health: enemyType.health,
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight / 2),
        },
        target: {
          x: Math.random() * window.innerWidth,
          y: window.innerHeight - 100,
        },
        status: 'alive',
      };
    });

    setEnemies(newEnemies);
  };

  const checkEnemiesStatus = () => {
    const allDeadOrReached = enemies.every(
      (enemy) => enemy.status === 'dead' || enemy.position.y >= window.innerHeight - 100
    );

    if (allDeadOrReached) {
      setWave((prevWave) => {
        const nextWave = prevWave + 1;
        updateWave(nextWave); // Dalga sayısını üst bileşene iletir
        return nextWave;
      });
      spawnEnemies();
    }
  };

  useEffect(() => {
    spawnEnemies();

    const moveInterval = setInterval(() => {
      setEnemies((prevEnemies) =>
        prevEnemies.map((enemy) => {
          if (enemy.status !== 'alive') return enemy;

          const dx = enemy.target.x - enemy.position.x;
          const dy = enemy.target.y - enemy.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 5) {
            updateHealth((prevHealth) => Math.max(prevHealth - 10, 0)); // Canı azalt
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
    }, 50);

    return () => clearInterval(moveInterval);
  }, []);

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
            left: `${enemy.position.x}px`,
            top: `${enemy.position.y}px`,
            backgroundColor: enemy.color,
          }}
        >
          <div className="enemy-health">{enemy.health}</div>
        </div>
      ))}
    </div>
  );
};

export default EnemyZone;

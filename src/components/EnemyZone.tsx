const EnemyZone = ({ updateWave, updateHealth }: { updateWave: (wave: number) => void, updateHealth: (health: number) => void }) => {
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [wave, setWave] = useState(1);

  const spawnEnemies = () => {
    const screenWidth = window.innerWidth;
    const turretZoneHeight = 100;
    const turretZoneWidth = screenWidth;

    const newEnemies = Array.from({ length: wave * 5 }, (_, index) => {
      const enemyType = enemyTypes[Math.min(wave - 1, enemyTypes.length - 1)];
      return {
        id: index,
        type: enemyType.type,
        health: enemyType.health,
        position: {
          x: Math.random() * screenWidth,
          y: Math.random() * (window.innerHeight / 2),
        },
        target: {
          x: Math.random() * turretZoneWidth,
          y: window.innerHeight - turretZoneHeight,
        },
        color: enemyType.color,
        speed: enemyType.speed,
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
        updateWave(nextWave);
        spawnEnemies();
        return nextWave;
      });
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
            updateHealth((prevHealth) => prevHealth - 10); // Can azaltma
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
  }, [enemies]);

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

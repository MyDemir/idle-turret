import React, { useState } from 'react';

const TurretZone = () => {
  const columns = 7;
  const rows = 3;
  const totalCells = columns * rows;

  const [turrets, setTurrets] = useState<boolean[]>(Array(totalCells).fill(false));

  const placeTurret = (index: number) => {
    const newTurrets = [...turrets];
    if (!newTurrets[index]) {
      newTurrets[index] = true;
      setTurrets(newTurrets);
    }
  };

  return (
    <div className={`grid grid-cols-${columns} gap-2`}>
      {turrets.map((hasTurret, index) => (
        <div
          key={index}
          className="w-12 h-12 border border-white flex items-center justify-center cursor-pointer bg-gray-800 hover:bg-gray-700"
          onClick={() => placeTurret(index)}
        >
          {hasTurret ? '🛡️' : ''}
        </div>
      ))}
    </div>
  );
};

export default TurretZone;

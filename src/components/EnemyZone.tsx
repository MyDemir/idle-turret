import React from 'react';

const EnemyZone = () => {
  const columns = 7;
  const rows = 3;

  return (
    <div className={`grid grid-cols-${columns} gap-2`}>
      {Array.from({ length: columns * rows }).map((_, index) => (
        <div
          key={index}
          className="w-12 h-12 bg-red-200 border border-red-500 rounded"
        >
          {/* Düşman buraya eklenecek */}
        </div>
      ))}
    </div>
  );
};

export default EnemyZone;

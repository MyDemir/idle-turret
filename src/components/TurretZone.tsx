import React from 'react';

const TurretZone = () => {
  const columns = 7;
  const rows = 3;

  return (
    <div className={`grid grid-cols-${columns} gap-2`}>
      {Array.from({ length: columns * rows }).map((_, index) => (
        <div
          key={index}
          className="w-12 h-12 border border-white flex items-center justify-center bg-gray-800 hover:bg-gray-700"
        >
          {/* Kule buraya yerleştirilecek */}
        </div>
      ))}
    </div>
  );
};

export default TurretZone;

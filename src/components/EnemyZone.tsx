const EnemyZone = () => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {[...Array(21)].map((_, i) => (
        <div
          key={i}
          className="w-12 h-12 bg-red-200 border border-red-500 rounded"
        >
          {/* Düşman burada gösterilecek */}
        </div>
      ))}
    </div>
  );
};

export default EnemyZone;

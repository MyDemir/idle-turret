import React from "react";

export default function HUD() {
  return (
    <div className="absolute top-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 flex justify-between text-sm sm:text-base">
      <div className="space-x-4">
        <span>Altın: 100</span>
        <span>Enerji: 75</span>
        <span>Skor: 0</span>
      </div>
      <div className="space-x-4">
        <span>Dalga: 1 / 10</span>
        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">Başlat</button>
      </div>
    </div>
  );
}

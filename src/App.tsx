import './App.css';
import HUD from './components/HUD';
import TurretZone from './components/TurretZone';

const App = () => {
  return (
    <div className="app relative w-full h-screen">
      <HUD health={100} gold={500} wave={1} />
      <main className="game-area p-4">
        <div className="turret-zone border border-white p-2 mb-4">
          <TurretZone />
        </div>
        <div className="enemy-zone border border-red-500 p-2">
          {/* EnemyZone bileşeni buraya eklenecek */}
        </div>
      </main>
    </div>
  );
};

export default App;

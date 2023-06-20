import './App.css';
import Headset from './components/Headset';

function App() {
  return (
    <div className='dark:bg-neutral-800 bg-neutral-50 w-screen h-screen p-8'>
      <h1 className="text-5xl">Active Players</h1>
      <div className="flex flex-row">
        <div className="grid grid-cols-2">
          <Headset name='headset 1'></Headset>
        </div>
      </div>
    </div>
  );
}

export default App;

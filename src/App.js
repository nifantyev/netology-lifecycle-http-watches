import { nanoid } from 'nanoid';
import './App.css';
import CityModel from './models/CityModel';
import Watches from './components/Watches';

function App() {
  const watches = new CityModel(nanoid(), 'Moscow', 3);

  return (
    <>
      <Watches watches={watches} onRemove={(id) => console.log(id)} />
    </>
  );
}

export default App;

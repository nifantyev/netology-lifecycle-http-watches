import { nanoid } from 'nanoid';
import './App.css';
import CityModel from './models/CityModel';
import Watches from './components/Watches';
import AddCityForm from './components/AddCityForm';

function App() {
  const watches = new CityModel(nanoid(), 'Moscow', 3);

  const handleAdd = (city) => {
    console.log(city);
  };

  return (
    <div className="container">
      <AddCityForm onAdd={handleAdd} />
      <Watches watches={watches} onRemove={(id) => console.log(id)} />
    </div>
  );
}

export default App;

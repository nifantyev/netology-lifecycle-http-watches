import React, { useState } from 'react';
import './App.css';
import Watches from './components/Watches';
import AddCityForm from './components/AddCityForm';

function App() {
  const [cities, setCities] = useState([]);

  const handleAdd = (city) => {
    setCities((prevCities) => [...prevCities, city]);
  };

  const handleRemove = (id) => {
    setCities((prevCities) => prevCities.filter((city) => city.id !== id));
  };

  return (
    <div className="app-container">
      <AddCityForm onAdd={handleAdd} />
      <div className="watches-list">
        {cities.map((city) => (
          <Watches key={city.id} city={city} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}

export default App;

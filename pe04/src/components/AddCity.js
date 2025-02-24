import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ onAddCity }) {
  const navigate = useNavigate();
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cityName.trim() || !country.trim()) {
      alert('City name and country are required.');
      return;
    }

    const newCity = {
      name: cityName,
      country,
      population,
      description,
    };
    onAddCity(newCity);

    navigate('/cities');
  };

  return (
    <div>
      <h2>Add a New City</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div>
          <label>City Name:</label>
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Population:</label>
          <input
            type="text"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Add City</button>
      </form>
    </div>
  );
}

export default AddCity;

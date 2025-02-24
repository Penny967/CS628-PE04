import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails({ cities }) {
  const { cityId } = useParams();
  const city = cities.find((c) => c.id === cityId);

  if (!city) {
    return <p style={{ color: 'red' }}>City not found!</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Details for {city.name}</h3>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population}</p>
    </div>
  );
}

export default CityDetails;

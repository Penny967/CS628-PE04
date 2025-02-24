import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Cities({ cities }) {
  return (
    <div>
      <h2>All Cities</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {/* redirect to /cities/:cityId */}
            <Link to={`/cities/${city.id}`}>
              {city.name} - {city.country}
            </Link>
          </li>
        ))}
      </ul>

      <hr />
      <Outlet />
    </div>
  );
}

export default Cities;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import Home from './components/Home';
import Cities from './components/Cities';
import CityDetails from './components/CityDetails';
import AddCity from './components/AddCity';

function App() {
  const [cities, setCities] = useState([
    { id: '1', name: 'Seattle', country: 'USA', population: '700,000' }, //default city data
  ]);

  const handleAddCity = (newCity) => {
    const cityWithId = { id: Date.now().toString(), ...newCity };
    setCities([...cities, cityWithId]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/cities" className={({ isActive }) => (isActive ? 'active' : '')}>Cities List</NavLink>
            </li>
            <li>
              <NavLink to="/add-city" className={({ isActive }) => (isActive ? 'active' : '')}>Add City</NavLink>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* City list */}
            <Route path="/cities" element={<Cities cities={cities} />}>
              <Route path=":cityId" element={<CityDetails cities={cities} />} />
            </Route>

            <Route
              path="/add-city"
              element={<AddCity onAddCity={handleAddCity} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

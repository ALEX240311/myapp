// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [passengers, setPassengers] = useState('');
  const [classType, setClassType] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log(departure, destination, dates, passengers, classType);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Departure" value={departure} onChange={(e) => setDeparture(e.target.value)} />
      <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <input type="text" placeholder="Dates" value={dates} onChange={(e) => setDates(e.target.value)} />
      <input type="number" placeholder="Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
      <select value={classType} onChange={(e) => setClassType(e.target.value)}>
        <option value="">Class</option>
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first">First</option>
      </select>
      <button onClick={handleSearch}>Search Flights</button>
    </div>
  );
};

export default SearchBar;

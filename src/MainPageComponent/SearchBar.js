import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [tripType, setTripType] = useState('one-way');
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState('economy');

  const handleSearch = () => {
    // Handle search logic here
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="trip-type">
          <label>
            <input type="radio" value="round-trip" checked={tripType === 'round-trip'} onChange={() => setTripType('round-trip')} />
            Round-trip
          </label>
          <label>
            <input type="radio" value="one-way" checked={tripType === 'one-way'} onChange={() => setTripType('one-way')} />
            One-way
          </label>
        </div>
        <div className="fields">
          <input type="text" placeholder="From" value={departure} onChange={(e) => setDeparture(e.target.value)} />
          <input type="text" placeholder="To" value={destination} onChange={(e) => setDestination(e.target.value)} />
          <input type="date" placeholder="Departure Date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
          {tripType === 'round-trip' && (
            <input type="date" placeholder="Return Date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          )}
          <input type="number" min="1" placeholder="Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
          <select value={classType} onChange={(e) => setClassType(e.target.value)}>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first-class">First Class</option>
          </select>
          <button onClick={handleSearch}>Search Flights</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css'


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch('http://localhost:3000/equipment')
        .then(response => response.json())
        .then(data => {
          const filteredResults = data.filter(item => {
            return item.itemProperty.toLowerCase().includes(searchTerm.toLowerCase());
          });
          setResults(filteredResults);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((item, index) => (
            <li key={index}>
              {/* Render items here */}
              {item.itemProperty}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;

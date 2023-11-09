import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const { results, searchTerm } = location.state || { results: [], searchTerm: '' };

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((item, index) => (
            <li key={index}>
              {item.name} {/* Assuming each item has an 'itemProperty' property */}
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

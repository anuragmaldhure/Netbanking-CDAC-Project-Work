import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchForm = ({ pages }) => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Redirect to the page if found in suggestions
    if (suggestions.includes(searchTerm)) {
      history.push(`/${searchTerm}`);
    } else {
      // Handle case when page not found
      console.log('Page not found');
    }
  };

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    // Filter suggestions based on input value
    const filteredSuggestions = pages.filter(page =>
      page.toLowerCase().includes(term.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <form className="d-flex" onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-success" type="submit">Search</button>
      {/* Render auto-suggestions */}
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => setSearchTerm(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchForm;

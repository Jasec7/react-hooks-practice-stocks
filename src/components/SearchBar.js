import React from "react";

function SearchBar({sortBy, setSortBy, filteredBy, setFilteredBy}) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="a-z"
          name="sort"
          checked={sortBy === "a-z"}
          onChange={(e) => setSortBy(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="price"
          name="sort"
          checked={sortBy === "price"}
          onChange={(e) => setSortBy(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={filteredBy} onChange={(e) => setFilteredBy(e.target.value) }>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

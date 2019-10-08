import React, { useState } from "react";

const SearchBar = ({ findResults }) => {
  const [result, setResult] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(result);
    findResults(result);
    setResult("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="search here"
        value={result}
        onChange={e => setResult(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

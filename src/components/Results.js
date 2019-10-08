import React from "react";

const Results = ({ results }) => {
  console.log(results);
  return (
    <ul>
      {results && results.map(result => <li key={result.id}>{result.name}</li>)}
    </ul>
  );
};

export default Results;

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {
  const [results, setResults] = useState("");
  const [data, setData] = useState([
    {
      name: "Tacos",
      id: "1"
    },
    {
      name: "Tarry",
      id: "2"
    },
    {
      name: "Seth",
      id: "3"
    },
    {
      name: "Harry",
      id: "4"
    }
  ]);

  const findResults = input => {
    setResults(
      data.filter(obj => {
        const regexInput = new RegExp(input, "i");
        return regexInput.test(obj.name) ? obj : null;
      })
    );
  };

  return (
    <>
      <SearchBar findResults={findResults} />
      <Results results={results} />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";

export default function SearchBar() {
  const names = [
    "Aby",
    "Sarah",
    "TT",
    "maki",
    "Dani",
    "John"
  ];

  const [search, setSearch] = useState("");
  const [results, setResults] = useState(names);

  useEffect(() => {
    const filteredNames = names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );

    setResults(filteredNames);
  }, [search]);

  return (
    <div>
      <h1>Name Search</h1>

      <input
        type="text"
        placeholder="Search names..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Results:</h2>

      {results.length > 0 ? (
        <ul>
          {results.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  )
}
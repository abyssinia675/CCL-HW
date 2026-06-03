import { useState, useEffect } from "react";

export default function CatFact() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFact = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://catfact.ninja/fact");

      if (!response.ok) {
        throw new Error("Failed to fetch cat fact");
      }

      const data = await response.json();

      setFact(data.fact);

      // Save to local storage
      localStorage.setItem("catFact", data.fact);
    } catch (err) {
      setError("Unable to load cat fact. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedFact = localStorage.getItem("catFact");

    if (savedFact) {
      setFact(savedFact);
      setLoading(false);
    } else {
      fetchFact();
    }
  }, []);

  if (loading) {
    return <h2>Loading cat fact...</h2>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={fetchFact}>Try Again</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Random Cat Fact</h1>

      <p>{fact}</p>

      <button onClick={fetchFact}>
        New Fact
      </button>
    </div>
  );
}
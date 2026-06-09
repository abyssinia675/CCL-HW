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

      // Save fact to local storage
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

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow-lg p-4 text-center"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="mb-4">🐱 Random Cat Fact</h2>

        {loading ? (
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          <>
            <p className="fs-5 mb-4">{fact}</p>

            <button
              className="btn btn-primary btn-lg rounded-pill"
              onClick={fetchFact}
            >
              New Fact
            </button>
          </>
        )}
      </div>
    </div>
  );
}

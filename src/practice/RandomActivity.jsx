import { useState, useEffect } from "react";

export default function RandomActivity() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchActivity = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch activity");
      }

      const data = await response.json();
      setActivity(data);
    } catch (err) {
      setError("Unable to load activity. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch activity when component mounts
  useEffect(() => {
    fetchActivity();
  }, []);

  if (loading) {
    return <h2>Loading activity...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h1>Random Activity Generator</h1>

      {/* activity && ( */}
      <div>
        {/* <h2>{activity.activity}</h2> */}
        <p>
          <strong>Joke setup:</strong> {activity.setup}
        </p>
        <p>
          <strong>Punchline:</strong> {activity.punchline}
        </p>
      </div>
    </div>
  );
}

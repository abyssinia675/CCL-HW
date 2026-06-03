import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    // Stop if count reaches 0
    if (count === 0) {
      return;
    }

    // Start interval
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Cleanup interval when component unmounts
    // or before the effect runs again
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <h1>Countdown Timer</h1>

      {count > 0 ? (
        <h2>{count}</h2>
      ) : (
        <h2>Time is up!</h2>
      )}
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>    </div>
  )
}
import { useState, useEffect } from "react";

const LIMIT = 50;

export default function CharacterCounter() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(`You have ${LIMIT} characters left`);

  useEffect(() => {
    const count = value.length;
    const remaining = LIMIT - count;

    if (count < 40) {
      setMessage(`You have ${remaining} characters left`);
    } else if (count >= 40 && count < 50) {
      setMessage("Getting close!");
    } else {
      setMessage("Character limit reached!");
    }
  }, [value]);

  return (
    <div>
      <h2>Character Counter</h2>

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={LIMIT}
        rows="5"
        cols="40"
        placeholder="Type something..."
      />

      <p>{message}</p>
    </div>
  );
}
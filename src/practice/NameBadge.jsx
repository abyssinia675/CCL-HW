import { useState, useEffect } from "react";

export default function NameBadge() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    document.title = name || "Name Badge App";
  }, [name]);

  return (
    <div>
      <h1>Name Badge Generator</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your JobTitle"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>
  )
}

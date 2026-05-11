import { useState } from "react";

function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
        transition: "0.3s",
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Toggle;
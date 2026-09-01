import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// The global stylesheet. It stays at the repo root, unchanged — importing it
// here is what makes Vite bundle it and hot-reload your edits.
import "../style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

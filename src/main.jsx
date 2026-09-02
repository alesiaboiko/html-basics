import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Tailwind's theme and utilities — and, from inside it, our own style.css.
// Both live here so the cascade layers stay in one place; style.css itself
// is unchanged and still hot-reloads. See the comment in tailwind.css.
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

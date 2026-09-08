import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/* Tailwind first (layered), then style.css (unlayered) — unlayered CSS outranks
   every layer, so existing component styles keep winning over utilities. */
import "./tailwind.css";

/* style.css lives at the repo root and is imported here so Vite bundles it globally. */
import "../style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

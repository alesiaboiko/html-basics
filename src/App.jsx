import { useState } from "react";

import LessonCard from "./LessonCard.jsx";
import { Switch } from "@/components/ui/switch";

export default function App() {
  // isDark is this render's value; setIsDark asks React for a new render.
  // false only ever applies on the first render, so the page loads light.
  const [isDark, setIsDark] = useState(false);

  // Radix hands us the new boolean directly — there is no event to unwrap.
  function handleThemeChange(checked) {
    setIsDark(checked);
    // Two-argument toggle: it forces rather than flips, so the class can
    // never drift out of step with the state.
    document.documentElement.classList.toggle("dark", checked);
  }

  return (
    <>
      {/* fixed, so it sits outside main's 100vh flex centring: in the flow
          it would either sit beside the cards or add a scrollbar */}
      <div className="fixed top-4 right-4 z-10 flex items-center gap-2">
        <label htmlFor="theme-toggle">Dark mode</label>
        <Switch
          id="theme-toggle"
          checked={isDark}
          onCheckedChange={handleThemeChange}
        />
      </div>

      <main>
        <section className="lessons" aria-label="Lessons">
          <LessonCard
            variant="html"
            title="HTML Basics"
            description="Learn the building blocks of the web with HTML. This lesson covers elements, attributes, and how to structure a webpage from scratch."
            chip="Code"
            dueDate="Sep 1"
            buttonVariant="primary"
            isDone
          />
          <LessonCard
            variant="css"
            title="CSS Basics"
            description="Style and layout your webpages with CSS. This lesson covers selectors, properties, the box model, and how to bring your designs to life."
            chip="Code"
            price="$19"
            dueDate="Sep 1"
            buttonVariant="primary"
          />
          <LessonCard
            variant="css"
            title="JSX Basics"
            description="Turn your markup into reusable components"
            chip="Code"
            price="$19"
            dueDate="Sep 15"
            buttonVariant="primary"
          />
        </section>
      </main>
    </>
  );
}

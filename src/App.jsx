import { useState } from "react";
import LessonCard from "./LessonCard.jsx";
import { Switch } from "@/components/ui/switch";

export default function App() {
  /* Lazy initializer: the class on <html> is the source of truth and lives
     outside React, so read it once on mount rather than assuming false. */
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  /* Radix renders <button role="switch">, so the prop is onCheckedChange —
     a button has no change event. `next` is the already-flipped value.
     The second argument to toggle() forces the outcome instead of inverting
     whatever happens to be on the element. */
  function handleThemeChange(next) {
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <>
      {/* Fixed, because `main` is a centred flex row filling the viewport —
          an in-flow sibling would sit beside the cards or push them offscreen. */}
      <div className="fixed top-4 right-4 z-10 flex items-center gap-2">
        <Switch
          id="dark-mode"
          checked={isDark}
          onCheckedChange={handleThemeChange}
        />
        <label
          htmlFor="dark-mode"
          className="text-sm text-foreground cursor-pointer"
        >
          Dark mode
        </label>
      </div>

      <main>
        <section className="lessons" aria-label="Lessons">
          <LessonCard
            variant="html"
            isDone
            title="HTML Basics"
            description="Learn the building blocks of the web with HTML. This lesson covers elements, attributes, and how to structure a webpage from scratch."
            chip="Code"
            dueDate="Sep 1"
          />
          <LessonCard
            variant="css"
            title="CSS Basics"
            description="Style and layout your webpages with CSS. This lesson covers selectors, properties, the box model, and how to bring your designs to life."
            chip="Code"
            price="$19"
            dueDate="Sep 1"
          />
          <LessonCard
            variant="css"
            title="JSX Basics"
            description="Turn your markup into reusable components"
            chip="Code"
            price="$19"
            dueDate="Sep 15"
          />
        </section>
      </main>
    </>
  );
}

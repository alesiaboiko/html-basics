import LessonCard from "./LessonCard.jsx";

export default function App() {
  return (
    <main>
      <section className="lessons" aria-label="Lessons">
        <LessonCard
          variant="html"
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
          dueDate="Sep 1"
        />
      </section>
    </main>
  );
}

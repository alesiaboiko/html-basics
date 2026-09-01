/**
 * COVERS — everything that differs between the two card covers.
 *
 * The `variant` prop picks one entry from this object. Every class name here
 * is a real class from style.css, so you can search for it in that file.
 * To add a third lesson, add a key here and style it in style.css.
 */
const COVERS = {
  html: {
    // background panel of the cover (the dark purple gradient)
    coverClass: "cover-html",
    // screen-reader text — the cover is decorative markup, so it needs a description
    label: "HTML lesson cover",
    // the big word in the top-left corner
    word: "HTML",
    // extra class on that word: HTML gets the rainbow gradient fill, CSS stays plain white
    wordClass: "gradient-html",
    // the three little underline bars, left to right
    bars: ["bar-teal", "bar-pink", "bar-violet"],
    // faded bracket glyph in the bottom-right corner
    ghost: "</>",
    // the 3px gradient line along the bottom edge
    stripClass: "strip-html",
    // contents of the mini code editor (see the note above <pre> below)
    code: (
      <>
        <span className="tok-tag">&lt;div</span> <span className="tok-attr">class</span>=<span className="tok-str">"container"</span><span className="tok-tag">&gt;</span>{"\n"}
        {"  "}<span className="tok-tag">&lt;h1&gt;</span>Lesson Title<span className="tok-tag">&lt;/h1&gt;</span>{"\n"}
        {"  "}<span className="tok-tag">&lt;p&gt;</span>Learn to code<span className="tok-tag">&lt;/p&gt;</span>{"\n"}
        <span className="tok-tag">&lt;/div&gt;</span>
      </>
    ),
  },

  css: {
    // background panel of the cover (the purple → cyan gradient)
    coverClass: "cover-css",
    // screen-reader text — the cover is decorative markup, so it needs a description
    label: "CSS lesson cover",
    // the big word in the top-left corner
    word: "CSS",
    // no extra class — this word is plain white, unlike the HTML one
    wordClass: null,
    // the three little underline bars, left to right
    bars: ["bar-blue", "bar-violet", "bar-cyan"],
    // faded brace glyph in the bottom-right corner
    ghost: "{ }",
    // the 3px gradient line along the bottom edge
    stripClass: "strip-css",
    // contents of the mini code editor (see the note above <pre> below)
    code: (
      <>
        <span className="tok-sel">.box</span> <span className="tok-plain">{"{"}</span>{"\n"}
        {"  "}<span className="tok-prop">color</span><span className="tok-plain">:</span> <span className="tok-val-green">#fff</span><span className="tok-plain">;</span>{"\n"}
        {"  "}<span className="tok-prop">display</span><span className="tok-plain">:</span> <span className="tok-val-pink">flex</span><span className="tok-plain">;</span>{"\n"}
        <span className="tok-plain">{"}"}</span>
      </>
    ),
  },
};

/**
 * A single lesson card.
 *
 * @param title       heading, e.g. "HTML Basics"
 * @param description paragraph under the heading
 * @param chip        pink tag in the bottom-left, e.g. "Code"
 * @param dueDate     the date only, e.g. "Sep 1" — the "Due Date: " label lives here in the component
 * @param variant     "html" or "css" — picks the cover from COVERS above
 */
export default function LessonCard({ title, description, chip, dueDate, variant }) {
  const cover = COVERS[variant];

  return (
    <article className="card">
      <div className={`card-cover ${cover.coverClass}`} role="img" aria-label={cover.label}>
        <div className="cover-title">
          <span className={cover.wordClass ? `cover-word ${cover.wordClass}` : "cover-word"}>
            {cover.word}
          </span>
          <span className="cover-bars">
            {cover.bars.map((bar) => (
              <i key={bar} className={`bar ${bar}`}></i>
            ))}
          </span>
        </div>

        <div className="code-window">
          <div className="code-window-header">
            <i className="dot dot-red"></i>
            <i className="dot dot-yellow"></i>
            <i className="dot dot-green"></i>
          </div>
          {/* Every line break and indent inside <pre> is written out as {"\n"} and {"  "}.
              JSX throws away the whitespace you see in this file, so without those the
              code snippet would render as one long line. */}
          <pre className="code-window-body"><code>{cover.code}</code></pre>
        </div>

        <span className="cover-ghost">{cover.ghost}</span>
        <div className={`cover-strip ${cover.stripClass}`}></div>
      </div>

      <div className="card-content">
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-meta">
          <span className="chip">{chip}</span>
          <span className="due-date">Due Date: {dueDate}</span>
        </div>
      </div>
    </article>
  );
}

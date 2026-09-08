import { Fragment } from "react";
import Chip from "./Chip.jsx";
import Button from "./Button.jsx";

/* Code snippets are stored as token data rather than inline JSX: JSX strips the
   indentation from multi-line text, which would flatten the `white-space: pre`
   layout inside .code-window-body. Strings in expressions are left untouched. */
const tok = (cls, text) => ({ cls, text });
const txt = (text) => ({ text });

/* Everything that differs between the two covers, keyed by variant. */
const VARIANTS = {
  html: {
    cover: "cover-html",
    label: "HTML lesson cover",
    word: "HTML",
    gradient: "gradient-html",
    bars: ["bar-teal", "bar-pink", "bar-violet"],
    ghost: "</>",
    strip: "strip-html",
    code: [
      [
        tok("tok-tag", "<div"),
        txt(" "),
        tok("tok-attr", "class"),
        txt("="),
        tok("tok-str", '"container"'),
        tok("tok-tag", ">"),
      ],
      [txt("  "), tok("tok-tag", "<h1>"), txt("Lesson Title"), tok("tok-tag", "</h1>")],
      [txt("  "), tok("tok-tag", "<p>"), txt("Learn to code"), tok("tok-tag", "</p>")],
      [tok("tok-tag", "</div>")],
    ],
  },

  css: {
    cover: "cover-css",
    label: "CSS lesson cover",
    word: "CSS",
    gradient: null,
    bars: ["bar-blue", "bar-violet", "bar-cyan"],
    ghost: "{ }",
    strip: "strip-css",
    code: [
      [tok("tok-sel", ".box"), txt(" "), tok("tok-plain", "{")],
      [
        txt("  "),
        tok("tok-prop", "color"),
        tok("tok-plain", ":"),
        txt(" "),
        tok("tok-val-green", "#fff"),
        tok("tok-plain", ";"),
      ],
      [
        txt("  "),
        tok("tok-prop", "display"),
        tok("tok-plain", ":"),
        txt(" "),
        tok("tok-val-pink", "flex"),
        tok("tok-plain", ";"),
      ],
      [tok("tok-plain", "}")],
    ],
  },
};

function CardCover({ variant }) {
  const v = VARIANTS[variant];
  if (!v) return null;

  return (
    <div className={`card-cover ${v.cover}`} role="img" aria-label={v.label}>
      <div className="cover-title">
        <span className={v.gradient ? `cover-word ${v.gradient}` : "cover-word"}>
          {v.word}
        </span>
        <span className="cover-bars">
          {v.bars.map((bar, i) => (
            <i key={i} className={`bar ${bar}`} />
          ))}
        </span>
      </div>

      <div className="code-window">
        <div className="code-window-header">
          <i className="dot dot-red" />
          <i className="dot dot-yellow" />
          <i className="dot dot-green" />
        </div>
        <pre className="code-window-body">
          <code>
            {v.code.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && "\n"}
                {line.map((token, j) =>
                  token.cls ? (
                    <span key={j} className={token.cls}>
                      {token.text}
                    </span>
                  ) : (
                    <Fragment key={j}>{token.text}</Fragment>
                  )
                )}
              </Fragment>
            ))}
          </code>
        </pre>
      </div>

      <span className="cover-ghost">{v.ghost}</span>
      <div className={`cover-strip ${v.strip}`} />
    </div>
  );
}

export default function LessonCard({
  title,
  description,
  chip,
  dueDate,
  variant,
  price = "Free",
  isDone = false,
}) {
  return (
    <article className={isDone ? "card is-done" : "card"}>
      <CardCover variant={variant} />
      <div className="card-content">
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-meta">
          <Chip label={isDone ? "Done" : chip} />
          <span className="price">{price}</span>
          {/* Template literal keeps this a single text node, matching the original
              markup exactly — `Due Date: {dueDate}` would emit two adjacent nodes,
              which the browser shapes separately and lays out ~0.01px differently. */}
          <span className="due-date">{`Due Date: ${dueDate}`}</span>
        </div>
        <Button>Start lesson</Button>
      </div>
    </article>
  );
}

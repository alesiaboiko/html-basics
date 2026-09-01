/**
 * A plain button. The `button` classes it renders are styled in style.css.
 *
 * Class naming follows the two-name system: every button gets the shared
 * `button` class plus one variant class, e.g. "button button-primary".
 *
 * @param children whatever goes inside the button, e.g. "Start lesson"
 * @param variant  "primary" (pink, for paid lessons) or "ghost" (default, outline only)
 */
export default function Button({ children, variant = "ghost" }) {
  return <button className={`button button-${variant}`}>{children}</button>;
}

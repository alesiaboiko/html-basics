/**
 * The small pink tag in a lesson card's meta row.
 *
 * The `chip` class it renders lives in style.css, next to the other
 * card styles — this component only decides what text goes inside.
 *
 * @param label the text inside the tag, e.g. "Code"
 */
export default function Chip({ label }) {
  return <span className="chip">{label}</span>;
}

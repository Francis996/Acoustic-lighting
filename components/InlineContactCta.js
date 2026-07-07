export function InlineContactCta({
  eyebrow = "Project Support",
  title,
  text,
  cta = "Contact Us",
  variant = "light",
  compact = false
}) {
  const classes = [
    "inline-contact-cta",
    variant === "dark" ? "is-dark" : "",
    compact ? "is-compact" : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div>
        <p className={`eyebrow ${variant === "dark" ? "" : "dark"}`}>{eyebrow}</p>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
      <a className="btn primary" href="/contact" data-contact-popup>
        {cta}
      </a>
    </div>
  );
}

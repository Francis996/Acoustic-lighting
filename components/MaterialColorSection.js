"use client";

const colorSeries = [
  {
    name: "Type A",
    label: "PET felt series",
    src: "/assets/img/linear/type-a-available-colors.jpg",
    alt: "Type A available PET felt colors with matching color codes"
  },
  {
    name: "Type B",
    label: "PET felt series",
    src: "/assets/img/linear/type-b-available-colors.jpg",
    alt: "Type B available PET felt colors with matching color codes"
  },
  {
    name: "Type C",
    label: "PET felt series",
    src: "/assets/img/linear/type-c-available-colors.jpg",
    alt: "Type C available PET felt colors with matching color codes"
  },
  {
    name: "Type F",
    label: "Velvet fabric series",
    src: "/assets/img/linear/type-f-available-colors.jpg",
    alt: "Type F available velvet fabric colors with matching color codes"
  }
];

const materialImage = {
  src: "/assets/img/linear/ppt-page3-pet-felt-material-hq.jpeg",
  alt: "High resolution PET felt acoustic material sample boards"
};

export function MaterialColorSection({ text }) {
  return (
    <section className="section linear-materials" id="materials">
      <div className="wrap">
        <div className="linear-section-head reveal">
          <div>
            <h2>Material and color selection.</h2>
            <p>{text}</p>
          </div>
        </div>

        <div className="linear-material-grid">
          <div className="material-photo-stack reveal">
            <img src={materialImage.src} alt={materialImage.alt} loading="lazy" />
          </div>
          <div className="color-system reveal delay-1">
            {colorSeries.map((series) => (
              <article key={series.name}>
                <div className="color-system-top">
                  <strong>{series.name}</strong>
                  <span>{series.label}</span>
                </div>
                <img src={series.src} alt={series.alt} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

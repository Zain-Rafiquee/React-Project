import Reveal from "./Reveal";
import { portfolio } from "../data";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-head portfolio__head">
          <Reveal className="eyebrow" i={0}>Selected Work</Reveal>
          <Reveal as="h2" className="h-section" i={1}>
            Showcasing best work with{" "}
            <span className="serif-italic accent">pure precision</span>
          </Reveal>
        </div>

        <div className="portfolio__grid">
          {portfolio.map((p, i) => (
            <Reveal className="portfolio__item" i={i} key={p.name}>
              <a href="#contact" className="portfolio__card">
                <div className="portfolio__visual" style={{ "--c": p.color }}>
                  <img
                    src={p.img}
                    alt={`${p.name} — ${p.type}`}
                    className="portfolio__img"
                    loading="lazy"
                  />
                  <span className="portfolio__year">{p.year}</span>
                  <span className="portfolio__view">View case ↗</span>
                </div>
                <div className="portfolio__meta">
                  <h3 className="portfolio__name">{p.name}</h3>
                  <span className="portfolio__type">{p.type}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

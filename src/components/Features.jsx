import Reveal from "./Reveal";
import { features } from "../data";
import "./Features.css";

export default function Features() {
  return (
    <section className="section features">
      <div className="container">
        <div className="section-head center">
          <Reveal className="eyebrow" i={0}>Capabilities</Reveal>
          <Reveal as="h2" className="h-section" i={1}>
            Packed with <span className="serif-italic accent">innovation</span>
          </Reveal>
          <Reveal as="p" className="lead" i={2}>
            Cutting-edge building blocks that snap together into intelligent,
            production-ready systems.
          </Reveal>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <Reveal className="features__card card" i={i} key={f.title}>
              <span className="features__tag">{f.tag}</span>
              <h3 className="features__title">{f.title}</h3>
              <span className="features__plus" aria-hidden>+</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { process } from "../data";
import "./Process.css";

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-head">
          <Reveal className="eyebrow" i={0}>How We Work</Reveal>
          <Reveal as="h2" className="h-section" i={1}>
            Our proven process for{" "}
            <span className="serif-italic accent">AI-driven success</span>
          </Reveal>
        </div>

        <div className="process__grid">
          {process.map((p, i) => (
            <Reveal className="process__step" i={i} key={p.no}>
              <span className="process__no">{p.no}</span>
              <div className="process__line" aria-hidden />
              <h3 className="process__title">{p.title}</h3>
              <p className="process__desc">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

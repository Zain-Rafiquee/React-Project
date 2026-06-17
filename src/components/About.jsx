import Reveal from "./Reveal";
import { stats } from "../data";
import "./About.css";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__top">
          <Reveal className="eyebrow" i={0}>About Nubien</Reveal>
          <Reveal as="h2" className="about__statement h-section" i={1}>
            A studio built on <span className="serif-italic accent">creativity</span>,
            collaboration and a relentless pursuit of excellence.
          </Reveal>
          <Reveal i={2}>
            <a href="#contact" className="btn btn-ghost about__cta">
              Book an Appointment <span className="arrow">↗</span>
            </a>
          </Reveal>
        </div>

        <div className="about__stats">
          {stats.map((s, i) => (
            <Reveal className="about__stat" i={i} key={s.label}>
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { team } from "../data";
import "./Team.css";

export default function Team() {
  return (
    <section className="section team">
      <div className="container">
        <div className="section-head">
          <Reveal className="eyebrow" i={0}>The People</Reveal>
          <Reveal as="h2" className="h-section" i={1}>
            Meet the team{" "}
            <span className="serif-italic accent">making things happen</span>
          </Reveal>
        </div>

        <div className="team__grid">
          {team.map((m, i) => (
            <Reveal className="team__card card" i={i % 3} key={m.name}>
              <img className="team__avatar" src={m.img} alt={m.name} loading="lazy" />
              <div className="team__info">
                <h3 className="team__name">{m.name}</h3>
                <span className="team__role">{m.role}</span>
              </div>
              <span className="team__social" aria-hidden>↗</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

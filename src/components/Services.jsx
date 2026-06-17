import Reveal from "./Reveal";
import { services } from "../data";
import "./Services.css";

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="glow services__glow" />
      <div className="container">
        <div className="services__head">
          <Reveal className="eyebrow" i={0}>Services</Reveal>
          <Reveal as="h2" className="h-section services__title" i={1}>
            AI-powered services for
            <br />
            <span className="serif-italic accent">future-driven</span> businesses
          </Reveal>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <Reveal className="services__card card" i={i % 3} key={s.no}>
              <div className="services__card-top">
                <span className="services__no">{s.no}</span>
                <span className="services__arrow" aria-hidden>↗</span>
              </div>
              <h3 className="services__name">{s.title}</h3>
              <span className="services__sub">{s.sub}</span>
              <p className="services__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

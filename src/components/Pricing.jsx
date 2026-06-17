import Reveal from "./Reveal";
import { pricing } from "../data";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-head center">
          <Reveal className="eyebrow" i={0}>Pricing</Reveal>
          <Reveal as="h2" className="h-section" i={1}>
            Flexible plans for <span className="serif-italic accent">every need</span>
          </Reveal>
          <Reveal as="p" className="lead" i={2}>
            Transparent pricing that scales with you. Every plan ships with a
            30-day money-back guarantee.
          </Reveal>
        </div>

        <div className="pricing__grid">
          {pricing.map((p, i) => (
            <Reveal
              className={`pricing__card card ${p.featured ? "is-featured" : ""}`}
              i={i}
              key={p.name}
            >
              {p.featured && <span className="pricing__badge">Most Popular</span>}
              <h3 className="pricing__name">{p.name}</h3>
              <p className="pricing__blurb">{p.blurb}</p>
              <div className="pricing__price">
                <span className="pricing__currency">$</span>
                {p.price}
                <span className="pricing__per">/month</span>
              </div>
              <a
                href="#contact"
                className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} pricing__btn`}
              >
                Get Started
              </a>
              <ul className="pricing__list">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="pricing__check" aria-hidden>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

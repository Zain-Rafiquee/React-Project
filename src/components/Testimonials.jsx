import Reveal from "./Reveal";
import { testimonials } from "../data";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head center">
          <Reveal className="eyebrow" i={0}>Testimonials</Reveal>
          <Reveal as="h2" className="h-section" i={1}>
            What our clients say about{" "}
            <span className="serif-italic accent">excellence</span>
          </Reveal>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal className="testimonials__card card" i={i % 3} key={t.name}>
              <p className="testimonials__quote">“{t.quote}”</p>
              <div className="testimonials__author">
                <img className="testimonials__avatar" src={t.img} alt={t.name} loading="lazy" />
                <div>
                  <span className="testimonials__name">{t.name}</span>
                  <span className="testimonials__role">{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

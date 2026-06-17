import Reveal from "./Reveal";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="section cta" id="contact">
      <div className="container">
        <Reveal className="cta__panel" i={0}>
          <div className="glow cta__glow" />
          <div className="cta__grid-overlay" aria-hidden />

          <div className="cta__content">
            <span className="cta__rating">★★★★★ &nbsp;200+ agencies rated</span>
            <h2 className="cta__title h-display">
              Ready to elevate your brand with{" "}
              <span className="serif-italic accent">next-gen</span> innovation
            </h2>
            <p className="cta__sub lead">
              Launch your AI-powered site with Nubien in minutes. Book a call and
              let's build something the future will thank you for.
            </p>
            <div className="cta__actions">
              <a href="#top" className="btn btn-primary">
                Book an Appointment <span className="arrow">↗</span>
              </a>
              <a href="mailto:hello@nubien.studio" className="btn btn-ghost">
                hello@nubien.studio
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

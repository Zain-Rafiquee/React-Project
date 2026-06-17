import { motion } from "motion/react";
import { clientLogos } from "../data";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="glow hero__glow" />
      <div className="hero__grid-overlay" aria-hidden />

      <div className="container hero__inner">
        <motion.div className="hero__badge" custom={0} variants={fadeUp} initial="hidden" animate="show">
          <span className="hero__dot" /> The AI agency for ambitious teams
        </motion.div>

        <motion.h1 className="hero__title h-display" custom={1} variants={fadeUp} initial="hidden" animate="show">
          AI-Driven Success,
          <br />
          <span className="serif-italic accent">Redefining</span> the Future
        </motion.h1>

        <motion.p className="hero__sub lead" custom={2} variants={fadeUp} initial="hidden" animate="show">
          We craft intelligent solutions that redefine innovation — keeping you
          ahead with AI-powered technology built for what comes next.
        </motion.p>

        <motion.div className="hero__cta" custom={3} variants={fadeUp} initial="hidden" animate="show">
          <a href="#contact" className="btn btn-primary">
            Connect With Us <span className="arrow">↗</span>
          </a>
          <a href="#about" className="btn btn-ghost">
            What is Nubien?
          </a>
        </motion.div>

        <motion.div className="hero__showcase" custom={4} variants={fadeUp} initial="hidden" animate="show">
          <div className="hero__window">
            <div className="hero__window-bar">
              <span /><span /><span />
              <em>nubien.studio / dashboard</em>
            </div>
            <img src="/images/hero.jpg" alt="Nubien AI dashboard preview" />
          </div>
        </motion.div>

        <motion.div className="hero__marquee" custom={5} variants={fadeUp} initial="hidden" animate="show">
          <span className="hero__marquee-label">Powering teams at</span>
          <div className="marquee">
            <div className="marquee__track">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <span className="marquee__item" key={i}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

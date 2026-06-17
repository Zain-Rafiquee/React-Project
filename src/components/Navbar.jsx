import { useEffect, useState } from "react";
import { nav } from "../data";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden>◆</span>
          Nubien
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav__cta-mobile">
            Connect With Us
          </a>
        </nav>

        <div className="nav__right">
          <a href="#contact" className="btn btn-primary nav__cta">
            Connect With Us <span className="arrow">↗</span>
          </a>
          <button
            className={`nav__burger ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}

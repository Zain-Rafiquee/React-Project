import { nav, socials } from "../data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="nav__logo footer__logo">
              <span className="nav__mark" aria-hidden>◆</span> Nubien
            </a>
            <p className="footer__tagline">
              The AI agency & studio building intelligent products for teams
              shaping what comes next.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a href="#" key={s} className="footer__social">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <span className="footer__col-title">Navigate</span>
              {nav.map((n) => (
                <a key={n.href} href={n.href}>{n.label}</a>
              ))}
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Company</span>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Changelog</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Legal</span>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">License</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Nubien Studio. All rights reserved.</span>
          <span className="footer__made">Crafted with intelligence ◆</span>
        </div>
      </div>
    </footer>
  );
}

import Reveal from "./Reveal";
import { comparison } from "../data";
import "./Comparison.css";

export default function Comparison() {
  return (
    <section className="section comparison">
      <div className="container">
        <div className="section-head center">
          <Reveal className="eyebrow" i={0}>Why Nubien</Reveal>
          <Reveal as="h2" className="h-section" i={1}>
            Nubien <span className="serif-italic">vs.</span> the rest
          </Reveal>
        </div>

        <div className="comparison__grid">
          <Reveal className="comparison__col comparison__col--them card" i={0}>
            <h3 className="comparison__col-title">The Others</h3>
            <ul>
              {comparison.them.map((t) => (
                <li key={t}>
                  <span className="comparison__icon comparison__icon--no" aria-hidden>×</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="comparison__col comparison__col--us card" i={1}>
            <h3 className="comparison__col-title">
              <span className="nav__mark" aria-hidden>◆</span> Nubien
            </h3>
            <ul>
              {comparison.us.map((u) => (
                <li key={u}>
                  <span className="comparison__icon comparison__icon--yes" aria-hidden>✓</span>
                  {u}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

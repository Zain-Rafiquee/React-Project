import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import { faqs } from "../data";
import "./FAQ.css";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq__inner">
        <div className="faq__head">
          <Reveal className="eyebrow" i={0}>FAQ</Reveal>
          <Reveal as="h2" className="h-section" i={1}>
            Frequently asked{" "}
            <span className="serif-italic accent">questions</span>
          </Reveal>
          <Reveal as="p" className="lead" i={2}>
            Everything you need to know before getting started. Still curious?
            Reach out any time.
          </Reveal>
        </div>

        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal i={i} key={item.q}>
                <div className={`faq__item ${isOpen ? "is-open" : ""}`}>
                  <button
                    className="faq__q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq__toggle" aria-hidden>{isOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq__a-wrap"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="faq__a">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

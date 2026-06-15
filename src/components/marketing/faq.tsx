import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/content/faq";

export function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <Reveal>
          <p className="section-kicker">FAQ</p>
          <h2 className="section-heading">Questions before you automate the front end.</h2>
          <p className="section-lede">
            Short, specific answers for business owners who want automation without losing
            control of the customer experience.
          </p>
        </Reveal>

        <div className="faq-list">
          {faqs.map((item) => (
            <AccordionItem question={item.question} key={item.question}>
              <p>{item.answer}</p>
            </AccordionItem>
          ))}
          <p className="faq-contact">
            Need a workflow reviewed?{" "}
            <Link href="/contact">Get Your Custom Automation Plan</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

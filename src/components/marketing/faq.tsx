import Link from "next/link";
import { AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/content/faq";

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-heading">Questions business owners ask before they switch.</h2>
        <p className="section-lede">
          Each answer is intentionally specific so the section does not repeat the same
          generic response under different questions.
        </p>

        <div className="faq-list">
          {faqs.map((item) => (
            <AccordionItem question={item.question} key={item.question}>
              <p>{item.answer}</p>
            </AccordionItem>
          ))}
        </div>

        <p className="section-lede">
          Have a workflow question not covered here? <Link href="/contact">Contact sales</Link>.
        </p>
      </div>
    </section>
  );
}

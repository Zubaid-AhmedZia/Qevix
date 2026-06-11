import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="page-shell">
      <div className="container">
        <section className="not-found-card">
          <p className="section-kicker">404</p>
          <h1>That page is not available.</h1>
          <p>
            The route may have moved, or the link may be mistyped. Return to the homepage
            to continue exploring QevixAi.
          </p>
          <div className="button-row">
            <ButtonLink href="/">Back to homepage</ButtonLink>
            <ButtonLink href="/book-demo" variant="secondary" eventName="demo_cta_click">
              Book a demo
            </ButtonLink>
          </div>
        </section>
      </div>
    </main>
  );
}

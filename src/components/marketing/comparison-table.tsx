import { CheckCircle2, MinusCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { comparisonRows } from "@/content/site";

export function ComparisonTable() {
  return (
    <section className="section section-muted" aria-labelledby="comparison-heading">
      <div className="container">
        <p className="section-kicker">Comparison</p>
        <h2 className="section-heading" id="comparison-heading">
          Better than voicemail. Simpler than an IVR. More scalable than adding cover for
          every missed shift.
        </h2>
        <p className="section-lede">
          The value is practical: fewer missed calls, better qualification, cleaner handoffs,
          and a route to booking without adding a shift for every gap.
        </p>

        <div className="comparison-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Need</th>
                <th scope="col">QevixAi</th>
                <th scope="col">Voicemail</th>
                <th scope="col">Rigid IVR</th>
                <th scope="col">Extra admin cover</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>
                    <span className="positive">
                      <CheckCircle2 aria-hidden="true" size={16} /> {row.qevix}
                    </span>
                  </td>
                  <td>
                    <span className="negative">
                      <MinusCircle aria-hidden="true" size={16} /> {row.voicemail}
                    </span>
                  </td>
                  <td>{row.ivr}</td>
                  <td>{row.admin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="button-row hero-actions">
          <ButtonLink href="/#pricing" variant="secondary" eventName="pricing_cta_click">
            See pricing
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

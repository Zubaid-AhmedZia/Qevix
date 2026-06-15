import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "QevixAi AI receptionist that books appointments and automates follow-ups";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f8ff",
          color: "#101828",
          padding: 72,
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 34,
            fontWeight: 800
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "#5b5ff5",
              color: "#fff"
            }}
          >
            Q
          </div>
          QevixAi
        </div>
        <div style={{ maxWidth: 920 }}>
          <div style={{ color: "#5b5ff5", fontSize: 28, fontWeight: 800 }}>
            AI receptionist and follow-up automation
          </div>
          <div style={{ marginTop: 22, fontSize: 74, lineHeight: 0.96, fontWeight: 900 }}>
            Automate follow-ups. Book more appointments. Save 20+ hours per week.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, color: "#526070", fontSize: 26 }}>
          <span>Instant lead response</span>
          <span>Appointment booking</span>
          <span>24/7 availability</span>
        </div>
      </div>
    ),
    size
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "QevixAi AI receptionist for businesses that cannot afford missed calls";
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
          background: "#f7f8fb",
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
              borderRadius: 10,
              background: "#176b87",
              color: "#fff"
            }}
          >
            Q
          </div>
          QevixAi
        </div>
        <div style={{ maxWidth: 920 }}>
          <div style={{ color: "#176b87", fontSize: 28, fontWeight: 800 }}>
            AI receptionist for businesses that cannot afford missed calls
          </div>
          <div style={{ marginTop: 22, fontSize: 74, lineHeight: 0.96, fontWeight: 900 }}>
            Answer every call. Book more appointments. Stay available 24/7.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, color: "#526070", fontSize: 26 }}>
          <span>No voicemail gaps</span>
          <span>No complex phone trees</span>
          <span>No extra reception shift</span>
        </div>
      </div>
    ),
    size
  );
}

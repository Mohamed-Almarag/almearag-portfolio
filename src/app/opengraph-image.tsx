import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(
    join(process.cwd(), "src/assets/mohamed-almearag.jpg"),
    "base64",
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#ededed",
      }}
    >
      <img
        src={`data:image/jpeg;base64,${photo}`}
        alt=""
        width={380}
        height={380}
        style={{ borderRadius: 9999, border: "5px solid #116e73" }}
      />
      <div style={{ fontSize: 52, letterSpacing: -1, marginTop: 28 }}>
        {profile.name}
      </div>
      <div style={{ fontSize: 28, color: "#a3a3a3", marginTop: 6 }}>
        {profile.title}
      </div>
    </div>,
    size,
  );
}

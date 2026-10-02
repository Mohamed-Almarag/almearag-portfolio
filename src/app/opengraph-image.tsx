import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";

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
        alignItems: "center",
        gap: 72,
        padding: "0 96px",
        background: "#0a0a0a",
        color: "#ededed",
      }}
    >
      <img
        src={`data:image/jpeg;base64,${photo}`}
        alt=""
        width={300}
        height={300}
        style={{ borderRadius: 9999, border: "4px solid #116e73" }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 70, letterSpacing: -2 }}>{profile.name}</div>
        <div style={{ fontSize: 38, color: "#a3a3a3", marginTop: 12 }}>
          {profile.title}
        </div>
        <div style={{ fontSize: 30, color: "#1fc6d1", marginTop: 28 }}>
          {profile.stack.join(" | ")}
        </div>
        <div style={{ fontSize: 24, color: "#737373", marginTop: 56 }}>
          {siteUrl.replace("https://", "")}
        </div>
      </div>
    </div>,
    size,
  );
}

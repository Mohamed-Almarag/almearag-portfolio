import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Almearag | Senior Frontend Engineer",
  description: "Senior Frontend Engineer. Vue.js | Nuxt.js | React | Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full scroll-smooth antialiased motion-reduce:scroll-auto`}
    >
      <body
        id="top"
        className="flex min-h-full flex-col bg-background font-sans text-foreground"
      >
        <a
          href="#main"
          className="sr-only rounded-md bg-primary px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-20"
        >
          Skip to content
        </a>
        <AppHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}

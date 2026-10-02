import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/layout/AppHeader";
import { profile } from "@/content/profile";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const [firstName, lastName] = profile.name.split(" ");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: siteUrl }],
  openGraph: {
    type: "profile",
    firstName,
    lastName,
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
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

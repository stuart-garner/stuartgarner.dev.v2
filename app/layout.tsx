import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--next-font-orbitron",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stuartgarner.dev"),
  title: "[SG] - Freelance Front End Engineer",
  description:
    "Senior front-end engineer with 20 years' experience, now working across the full stack with TypeScript, React, Vue and AI-assisted development.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "[SG] - Freelance Front End Engineer",
    type: "website",
    url: "/",
    images: [
      {
        url: "/logo.jpg",
        type: "image/jpeg",
        width: 1024,
        height: 1024,
        alt: "Stuart's Profile Picture",
      },
    ],
  },
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.classList.add(t)}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={orbitron.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

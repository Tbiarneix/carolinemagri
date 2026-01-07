import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation/Navigation";
import { SkipLink } from "@/components/SkipLink/SkipLink";
import { Footer } from "@/components/Footer/Footer";
import { AtkinsonHyperlegible } from "@/font/custom-font";

export const metadata: Metadata = {
  title: {
    default: "Caroline Magri - Psychologue et Sophrologue à Pinsaguel",
    template: "%s | Caroline Magri - Psychologue",
  },
  description:
    "Cabinet de psychologie et sophrologie à Pinsaguel (31120). Accompagnement pour enfants, adolescents, adultes et familles. Bilan psychologique WISC-V.",
  keywords: [
    "psychologue",
    "sophrologue",
    "Pinsaguel",
    "Toulouse",
    "bilan psychologique",
    "WISC-V",
    "sophrologie",
    "thérapie",
    "31120",
  ],
  authors: [{ name: "Caroline Magri" }],
  openGraph: {
    title: "Caroline Magri - Psychologue et Sophrologue",
    description:
      "Cabinet de psychologie et sophrologie à Pinsaguel. Accompagnement pour enfants, adolescents, adultes et familles.",
    url: "https://carolinemagri.fr",
    siteName: "Caroline Magri - Psychologue",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://carolinemagri.fr"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={AtkinsonHyperlegible.className}>
        <header role="banner" id="main-header">
          <SkipLink />
          <Navigation />
        </header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

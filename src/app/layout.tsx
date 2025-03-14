import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation/Navigation";
import { luciole } from "@/font/custom-font";

export const metadata: Metadata = {
  title: "Caroline Magri - Psychologue et Sophrologue",
  description: "Cabinet de psychologie et sophrologie à Pinsaguel. Accompagnement psychologique, sophrologie et bilan psychologique.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={luciole.className}>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

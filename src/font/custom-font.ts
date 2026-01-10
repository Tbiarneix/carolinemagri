import localFont from "next/font/local";

export const AtkinsonHyperlegible = localFont({
  src: [
    {
      path: "./Atkinson-Hyperlegible-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Atkinson-Hyperlegible-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-atkinson",
});

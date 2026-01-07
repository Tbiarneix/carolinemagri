import localFont from "next/font/local";

export const AtkinsonHyperlegible = localFont({
  src: [
    {
      path: "./Atkinson-Hyperlegible-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Atkinson-Hyperlegible-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Atkinson-Hyperlegible-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Atkinson-Hyperlegible-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

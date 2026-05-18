import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Souvik Nath | Full Stack & AI Developer",

  description:
    "Portfolio of Souvik Nath, Full Stack & AI Developer specializing in React, Next.js, Django, Python, AI integrations, scalable web applications, and modern software systems.",

  keywords: [
    "Souvik Nath",
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "React",
    "Django",
    "Python",
    "Portfolio",
  ],

  authors: [
    {
      name: "Souvik Nath",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#0b1326",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/gloock";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luana Pinheiro | Psicóloga e Neuropsicóloga",
  description:
    "Psicoterapia e avaliação neuropsicológica com acolhimento, ciência e presença. CRP 17/3012.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

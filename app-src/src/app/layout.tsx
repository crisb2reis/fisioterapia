import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FisioTerapia Pro – Recupere sua Mobilidade e Viva sem Dor | São Paulo",
  description:
    "Consultório de fisioterapia especializado em reabilitação musculoesquelética, neurológica e esportiva. Agende sua consulta online. CREFITO-3 #123456-F.",
  keywords: [
    "fisioterapia", "fisioterapeuta", "reabilitação", "dor lombar",
    "lesão esportiva", "pós-operatório", "São Paulo", "Av. Paulista",
    "fisioterapia online", "agendamento fisioterapia"
  ],
  openGraph: {
    title: "FisioTerapia Pro – Recupere sua Mobilidade",
    description: "Consultório de fisioterapia com +500 pacientes recuperados. Agende agora!",
    type: "website",
    locale: "pt_BR",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Fisioterapia Premium | Dr. Kaique Maciel',
  description: 'Atendimento especializado em fisioterapia ortopédica e esportiva.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-display antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

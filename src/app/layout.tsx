import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kings University | Future-Ready Education",
  description: "Kings University - Empowering the next generation of global leaders through cutting-edge technology and rigorous academic discipline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}

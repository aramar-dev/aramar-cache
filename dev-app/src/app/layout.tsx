import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inyectamos Inter optimizada
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aramar Dev | Núcleo de Desarrollo",
  description:
    "División de investigación y desarrollo de software de Aramar Family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      {/* Aplicamos tu color oscuro como fondo y el claro como texto (Modo Oscuro Base) */}
      <body
        className={`${inter.variable} font-sans bg-[var(--color-aramar-base-dark)] text-[var(--color-aramar-base-light)] antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

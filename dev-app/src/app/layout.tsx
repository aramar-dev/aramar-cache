import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider"; // <-- Importamos

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Aramar Dev | Núcleo de Desarrollo",
  description: "División de investigación y desarrollo de software de Aramar Family.",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/dev_blk.svg",
      href: "/dev_blk.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/dev_wht.svg",
      href: "/dev_wht.svg",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // Agregamos suppressHydrationWarning (requerido por next-themes)
    <html lang="es" suppressHydrationWarning> 
      {/* Quitamos los bg- y text- fijos para que Tailwind los controle */}
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-white dark:bg-[var(--color-aramar-base-dark)] text-gray-900 dark:text-[var(--color-aramar-base-light)] transition-colors duration-300`}>
        
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
        
      </body>
    </html>
  );
}
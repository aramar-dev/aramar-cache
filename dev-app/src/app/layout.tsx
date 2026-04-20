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
    // suppressHydrationWarning requerido por next-themes
    <html lang="es" suppressHydrationWarning>
      {/* 
        Light mode por defecto:
        - bg: base-light (#F2F2F2)
        - text: family-3 (#203140) para máximo contraste
        
        Dark mode:
        - bg: base-dark (#262626)
        - text: base-light (#F2F2F2) para máximo contraste
      */}
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-base-light dark:bg-base-dark text-family-3 dark:text-base-light transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
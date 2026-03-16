import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Md. Shahriar Hosen | Full Stack Web Developer",
  description: "A portfolio website",
};

import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Header/>
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        <Toaster position="bottom-right" toastOptions={{
          style:{background: "#000", color: "#fff"}
        }}/>
      </body>
    </html>
  );
}

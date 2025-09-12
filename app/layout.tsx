import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarcStreeterDev Registry | Custom shadcn/ui Components",
  description: "A personal shadcn/ui component registry featuring 46+ carefully crafted UI components and example blocks for modern React applications.",
  keywords: ["shadcn", "ui", "components", "react", "nextjs", "tailwind", "registry"],
  authors: [{ name: "Marc Streeter", url: "https://marcstreeter.dev" }],
  openGraph: {
    title: "MarcStreeterDev Registry",
    description: "Custom shadcn/ui component registry with 46+ UI components",
    url: "https://registry.marcstreeter.dev",
    siteName: "MarcStreeterDev Registry",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarcStreeterDev Registry",
    description: "Custom shadcn/ui component registry with 46+ UI components",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

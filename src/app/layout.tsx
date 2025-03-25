import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant Finder",
  description: "Find the best restaurants near you",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Restaurant Finder",
    description: "Find the best restaurants near you",
    siteName: "Restaurant Finder",
    images: [
      {
        url: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&auto=format&fit=crop&q=60",
        width: 800,
        height: 600
      }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { description, title } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: description,
  keywords: [
    "restaurant finder",
    "best restaurants near me",
    "top restaurants",
    "local restaurants",
    "nearby restaurants",
    "food near me",
    "restaurant reviews",
    "dining guide",
    "find restaurants",
    "best places to eat"
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}
// export const metadata: Metadata = {
//   title: "Restaurant Finder",
//   description: "Find the best restaurants near you",
//   viewport: "width=device-width, initial-scale=1.0",
//   openGraph: {
//     title: "Restaurant Finder",
//     description: "Find the best restaurants near you",
//     siteName: "Restaurant Finder",
//     url: "https://seo.sabaiops.site",
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&auto=format&fit=crop&q=60",
//         width: 1200, // Recommended by Open Graph
//         height: 630,
//         alt: "Find the best restaurants near you"
//       }]
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Restaurant Finder",
//     description: "Find the best restaurants near you",
//     images: ["https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800&auto=format&fit=crop&q=60"]
//   }
// };

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

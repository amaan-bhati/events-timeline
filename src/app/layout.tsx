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
  title: "Amaan's Journey | Tech Events Timeline",
  description: "A comprehensive chronicle of Amaan's tech community involvement featuring conferences, workshops, and hackathons. Track my evolution from an enthusiastic attendee to an event organizer and lead speaker. This interactive timeline showcases my contributions to Microsoft Learn Student Ambassadors, tech conferences, developer meetups, and community workshops. Explore my journey through various roles - from organizing committees to leading technical sessions and fostering tech community growth.",
  keywords: "tech events, conferences, workshops, hackathons, Microsoft Learn Student Ambassador, community leadership, tech timeline, developer meetups, technical speaker",
  authors: [{ name: "Amaan" }],
  creator: "Amaan",
  openGraph: {
    title: "Tech Events Timeline | Amaan's Journey",
    description: "Explore my journey through tech events, conferences, and workshops - from attendee to community leader",
    type: "website",
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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Call Ready - Never Miss A Call While You're On The Job",
  description: "Smart voicemail and call routing for mechanics, plumbers, electricians, and contractors. Veteran-owned. Always on call. Always ready.",
  keywords: ["voicemail", "call routing", "small business", "contractors", "plumbers", "electricians", "mechanics"],
  openGraph: {
    title: "Call Ready - Never Miss A Call",
    description: "Smart voicemail and call routing for working professionals who can't always answer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

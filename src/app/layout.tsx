import type { Metadata } from "next";
import { Pacifico, Quicksand } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Darling Drink Company | Central Mississippi Mobile Drink Trailer",
  description:
    "Specialty lemonades, dirty sodas & dirty energy drinks served from our pink mobile drink trailer in Central Mississippi. Book us for your next event!",
  keywords: [
    "Darling Drink Company",
    "Central Mississippi",
    "mobile drink trailer",
    "specialty lemonade",
    "dirty soda",
    "event catering",
    "Mississippi",
  ],
  openGraph: {
    title: "Darling Drink Company",
    description: "Central Mississippi's favorite mobile drink trailer. Specialty lemonades, dirty sodas & dirty energy drinks for your next event.",
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
      <body className={`${pacifico.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

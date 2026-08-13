import "./globals.css";
import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Enwiya Law Firm | Trusted Legal Counsel",
    template: "%s | Enwiya Law Firm",
  },
  description:
    "Enwiya Law Firm provides dependable legal services in corporate law, estate planning, immigration, and probate. Schedule a free consultation today.",
  keywords: [
    "law firm",
    "attorney",
    "corporate law",
    "estate planning",
    "immigration law",
    "probate",
  ],
  openGraph: {
    title: "Enwiya Law Firm | Trusted Legal Counsel",
    description:
      "Dependable legal services tailored to your needs. Protecting your rights with integrity and professionalism.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={libreBaskerville.variable}>
      <body className="bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

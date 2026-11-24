import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import NavLinks from "@/components/NavLinks";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-slate-900 text-lg text-slate-100 antialiased">
        <Header />
        <div className="flex flex-1 flex-wrap">
          <aside className="w-full border-b border-slate-700 px-4 py-6 sm:w-64 sm:border-b-0 sm:border-r">
            <NavLinks />
          </aside>
          <main className="min-w-0 flex-1 p-8">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

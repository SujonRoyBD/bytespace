import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Learn Digital Asset Creation & Design Systems",
  description:
    "Unlock the power of digital creation with expert guidance from top industry creators. Explore video courses in UI/UX, Figma, Big Data, and more.",
  keywords: [
    "ByteSpace",
    "Digital Assets",
    "UI/UX Design",
    "Figma Courses",
    "Online Learning",
    "Creator Academy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#D2FF00] selection:text-[#0f172a]">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

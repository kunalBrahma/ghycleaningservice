import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/navbar";
import SmoothScroller from "@/components/SmoothScroller"; 
import Footer from "@/components/Footer";
import FloatingWhatsAppt from "@/components/floatingwhatsapp";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Guwahati Cleaning Service",
  description: "Professional and reliable cleaning services in Guwahati, Assam.",
  icons : {
    icon : "/favicon.ico"
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <SmoothScroller>
          <TopBar />
          <Navbar />
          <main className="pt-28">
            {children}
          </main>
          <Footer />
          <FloatingWhatsAppt />
        </SmoothScroller>
      </body>
    </html>
  );
}

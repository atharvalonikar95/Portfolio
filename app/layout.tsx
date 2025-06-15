import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webdev Porfolio",
  description: "Webdev Porfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="hidden md:block">
          <AnimatedCursor 
            innerSize={8}
            outerSize={35}
            innerScale={2} 
            outerScale={2} 
            outerAlpha={0} 
            innerStyle={{background:'white'}}
            outerStyle={{
              border:'3px solid white'
            }}
            />
        </div>
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>

      </body>
    </html>
  );
}

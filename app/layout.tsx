import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; 
import FooterSection from "./components/FooterSection"; 

export const metadata: Metadata = {
  title: "Travel Website",
  description: "Travel beyond your imagination",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />  
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
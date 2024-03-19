import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Padisco Shoes",
  description: "Padisco shoes Africa-Cameroon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="w-screen h-screen bg-gradient-to-b from-yellow-300 to-black">
      <div className="h-24">
      <Navbar/>
      </div>
      <div className="h-[calc(100vh-96px)]">
      {children}
      
      </div>
      </div>
      </body>
    </html>
  );
}

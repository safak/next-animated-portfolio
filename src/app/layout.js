import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assegu Ermias Portfolio Web",
  description: "My Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* Nest TransitionProvider with children directly */}
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  )
}

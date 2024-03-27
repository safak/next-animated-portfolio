import { Inter } from "next/font/google";
import "./globals.css";
import PageTransitionProvider from "@/components/PageTransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Padisco Shoes",
  description: "Padisco shoes Africa-Cameroon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amir Zukhair",
  description: "My experience of web developing is over 4 years. I usually make Responsive Web Site for clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TransitionProvider>{children}</TransitionProvider>
        </body>
    </html>
  );
}

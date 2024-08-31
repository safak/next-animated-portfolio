import { Raleway } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Meghdad Hoseinzadeh",
  description:
    "Professional profile of Meghdad Hoseinzadeh, an experienced IT and administrative professional with expertise in web development, IT management, and accounting. Based in Tabriz, Iran, Meghdad brings over a decade of experience in delivering innovative solutions and managing complex operations across various sectors.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

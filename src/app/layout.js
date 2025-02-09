import TransitionProvider from "@/components/transitionProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nelson Katwal | Animation Portfolio",
  description:
    "Explore the creative works of Nelson Katwal, a frontend developer showcasing a portfolio of animations, designs, and artistic projects.",
  keywords:
    "Nelson Katwal, animation, portfolio, animator, design, art, creative works, animation projects",
  author: "Nelson Katwal",
  openGraph: {
    title: "Nelson Katwal | Animation Portfolio",
    description:
      "Explore the creative works of Nelson Katwal, a professional animator showcasing a portfolio of animations, designs, and artistic projects.",
    url: "https://www.nelsonkatwal.com.np",
    type: "website",
    images: [
      {
        url: "https://nelsonkatwal.com.np/_next/image?url=%2Fhero.png&w=2048&q=75",
        width: 800,
        height: 600,
        alt: "Nelson Katwal",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
      </head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

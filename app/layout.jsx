import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "The Global Music Fest - Experience Unforgettable Performances",
  description: "Join us for The Global Music Fest, featuring live performances from top artists across various genres from September 30 to October 2, 2024.",
  keywords: "music fest, live music, concerts, The Global Music Fest, music festival, artists, tickets, music event",
  author: "Your Name or Organization Name",
  openGraph: {
    title: "The Global Music Fest",
    description: "Join us for The Global Music Fest, featuring live performances from top artists across various genres from September 30 to October 2, 2024.",
    url: "https://www.yourwebsite.com", // Your website URL
    type: "website",
    images: [
      {
        url: "https://www.yourwebsite.com/path-to-image.jpg", // Replace with your image URL
        width: 800,
        height: 600,
        alt: "Global Music Fest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Your Twitter handle
    title: "The Global Music Fest",
    description: "Join us for The Global Music Fest, featuring live performances from top artists across various genres from September 30 to October 2, 2024.",
    image: "https://www.yourwebsite.com/path-to-image.jpg", // Replace with your image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <div>
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

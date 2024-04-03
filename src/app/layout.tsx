
import type { Metadata } from "next";
import "./globals.css";
import { Merriweather_Sans } from "next/font/google"
import styles from "@/styles/root.module.scss";
export const metadata: Metadata = {
  title: "My portfolio",
  description: "Made with react, next.js, and typescript",
};
const merriweatherSans = Merriweather_Sans({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={merriweatherSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "./content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.label,
  description: site.intro,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 focus:z-[60] focus:rounded-md focus:border focus:border-line focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          본문으로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Quantico, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const quantico = Quantico({
  variable: "--font-quantico",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wen's Portfolio",
  description: "Wen Liu's design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${quantico.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GVCSX3FP33"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GVCSX3FP33');
          `}
        </Script>
        <Script
          src="https://t.contentsquare.net/uxa/6ad696d06b974.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medxai-innovations.com"),
  title: "MEDxAI Innovations — Advancing Healthcare Through AI",
  description:
    "MEDxAI Innovations builds AI-powered healthcare diagnostics and drug discovery platforms. Flagship products: Cervilens™ AI Digital Colposcope & Quantum PharmX™ Molecular Intelligence Suite.",
  keywords: [
    "MEDxAI Innovations",
    "AI healthcare",
    "Cervilens",
    "cervical cancer screening",
    "Quantum PharmX",
    "drug discovery",
    "medical AI",
    "healthcare AI Chennai",
  ],
  authors: [{ name: "MEDxAI Innovations Pvt. Ltd." }],
  openGraph: {
    title: "MEDxAI Innovations — Advancing Healthcare Through AI",
    description:
      "AI-powered cervical cancer screening (Cervilens™) & molecular drug discovery (Quantum PharmX™) from Chennai, India.",
    url: "https://www.medxai-innovations.com",
    siteName: "MEDxAI Innovations",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MEDxAI Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@medxai",
    title: "MEDxAI Innovations",
    description: "Advancing Healthcare Through AI",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

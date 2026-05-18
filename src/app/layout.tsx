import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Diagnostico clinico y docencia universitaria`,
    template: `%s | ${siteConfig.shortName}`
  },
  description:
    "Sitio academico profesional de Abraham Gomez Choel: diagnostico clinico, laboratorio, docencia universitaria y recursos para estudiantes.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "profile",
    locale: "es_MX",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.name} | Perfil academico`,
    description:
      "Perfil academico, experiencia institucional, docencia y recursos para estudiantes.",
    images: [
      {
        url: "/images/abraham-choel-profile.svg",
        width: 1200,
        height: 630,
        alt: "Perfil academico de Abraham Gomez Choel"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Perfil academico`,
    description: "Diagnostico clinico, laboratorio, docencia y recursos academicos.",
    images: ["/images/abraham-choel-profile.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

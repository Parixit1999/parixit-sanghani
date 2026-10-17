import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/data/profile";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

const title = "Parixit Sanghani | Software Engineer";
const description =
  "Parixit Sanghani is a software engineer in Boston building data-intensive backend systems, distributed systems, and AI platforms. AI Developer at MSMM Engineering, previously Nebula-NLU and Amazon Robotics.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "Parixit Sanghani",
    "software engineer",
    "AI engineer",
    "backend engineer",
    "distributed systems engineer",
    "MLOps engineer",
    "AI platform engineer",
    "Boston software engineer",
    "AWS Bedrock",
    "RAG",
    "Python",
    "Kubernetes",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description,
    locale: "en_US",
    images: [{ url: "/parixit-favicon.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/parixit-favicon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#030617",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/parixit-favicon.png`,
  jobTitle: "AI Developer",
  worksFor: { "@type": "Organization", name: "MSMM Engineering" },
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Boston", addressRegion: "MA", addressCountry: "US" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Rochester Institute of Technology" },
    { "@type": "CollegeOrUniversity", name: "Birla Vishvakarma Mahavidyalya" },
  ],
  sameAs: [site.links.linkedin, site.links.github, site.links.x],
  knowsAbout: ["Backend Engineering", "Distributed Systems", "MLOps", "AI Platforms", "Cloud Infrastructure", "RAG", "Python", "AWS", "Kubernetes"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden font-sans leading-relaxed">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <link rel="me" href={site.links.linkedin} />
        <link rel="me" href={site.links.github} />
        <link rel="me" href={site.links.x} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}

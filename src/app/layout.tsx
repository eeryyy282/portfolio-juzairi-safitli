import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteContent } from "@/content";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl = "https://portfolio-juzairi-safitli.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  keywords: siteContent.metadata.keywords,
  authors: [{ name: `${siteContent.hero.fullName}, ${siteContent.hero.degree}` }],
  creator: siteContent.hero.fullName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: siteContent.metadata.ogTitle,
    description: siteContent.metadata.ogDescription,
    siteName: siteContent.metadata.title,
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: `${siteContent.hero.fullName} - ${siteContent.hero.degree}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={`${jakarta.variable} ${quicksand.variable}`}>
      <body className="font-sans antialiased text-tech-navy-900 dark:text-slate-100 bg-tech-navy-50 dark:bg-slate-950 min-h-screen flex flex-col transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


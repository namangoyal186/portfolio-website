import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naman Goyal | Senior Software Engineer",
  description: "Portfolio of Naman Goyal, a Senior Software Engineer specializing in building scalable backend systems, microservices, and reliable distributed architecture.",
  keywords: ["Senior Software Engineer", "Backend Engineer", "Java Developer", "Spring Boot Developer", "Microservices Engineer", "System Design", "Kafka", "Docker", "Kubernetes", "AWS", "Optum", "Amdocs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} antialiased no-scrollbar`}
    >
      <body className="min-h-screen flex flex-col font-sans overflow-x-clip no-scrollbar">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Menu, X, Mail, Moon, Sun, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },


];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tighter font-outfit">
              Naman Goyal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="https://github.com/namangoyal186" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <FaGithub className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/naman-goyal186/" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <FaLinkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <a href="/Resume_NamanGoyal.pdf" download="Resume_NamanGoyal.pdf">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
            <Link href="#contact">
              <Button>Let's Talk</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md absolute top-16 left-0 w-full">
          <nav className="flex flex-col p-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Link href="https://github.com/namangoyal186" target="_blank" rel="noreferrer">
                <Button variant="outline" size="icon">
                  <FaGithub className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/naman-goyal186/" target="_blank" rel="noreferrer">
                <Button variant="outline" size="icon">
                  <FaLinkedin className="w-4 h-4" />
                </Button>
              </Link>
              <a href="/Resume_NamanGoyal.pdf" download="Resume_NamanGoyal.pdf" className="flex-1">
                <Button variant="outline" className="w-full gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Download className="w-4 h-4" />
                  Resume
                </Button>
              </a>
              <Link href="#contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Let's Talk</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Naman Goyal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import { BackgroundGlow } from "@/components/ui/background-glow";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Server, Database, Cloud, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";




const metrics = [
  { label: "Years Experience", value: "5+", icon: <Code2 className="w-5 h-5 text-primary" /> },
  { label: "Companies", value: "2", icon: <Server className="w-5 h-5 text-primary" /> },
  { label: "Microservices", value: "15+", icon: <Database className="w-5 h-5 text-primary" /> },
  { label: "Users Impacted", value: "1M+", icon: <Cloud className="w-5 h-5 text-primary" /> },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-24 md:pb-32 overflow-hidden">
      <BackgroundGlow />
      

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary via-blue-500 to-purple-500">
              <div className="w-full h-full rounded-full bg-background overflow-hidden border-4 border-background flex items-center justify-center relative">
                 <Image src="/Passport_Photo.jpg" alt="Naman Goyal" fill className="object-cover object-top" priority />
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-wide font-outfit">
              Hi, I'm Naman Goyal 👋
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
              Building Scalable <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Backend Systems
              </span>{" "}
              for Millions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Senior Software Engineer specializing in Java, Spring Boot, Microservices, and architecting reliable distributed systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Metrics section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-16 border-t border-border mt-16">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow h-full min-h-[160px] gap-3">
                <div className="p-3 rounded-full bg-primary/10">
                  {metric.icon}
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground font-outfit">
                    {metric.value}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider text-center">
                    {metric.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

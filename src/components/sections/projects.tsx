"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "Traffic Prediction & Control System",
    description: "An advanced system built to predict traffic flow and optimize traffic management in real-time, significantly improving urban mobility.",
    impact: "Achieved a 30% reduction in traffic congestion through predictive modeling.",
    tech: ["Python", "YOLO (Object Detection)", "ARIMA (Time Series)", "OpenCV", "Flask", "Google Maps API"],
    github: "https://github.com/namangoyal186",
    link: "#",
    featured: true,
  },
  {
    title: "AUTBOT - Autism Assistance IoT",
    description: "An intelligent, interactive IoT device designed for caregivers to help children with autism improve vocabulary and develop social interaction skills.",
    impact: "Captured 100% of child activity emotions, providing accurate diagnostics to doctors and enabling 10+ interactive activities.",
    tech: ["Arduino", "Sensors", "Emotion Detection Algorithms", "IoT Integration", "Java", "C++"],
    github: "https://github.com/namangoyal186",
    link: "#",
    featured: true,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-outfit mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="h-full bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-3">
                      <Link href={project.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <FaGithub className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold font-outfit mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="mb-6 p-3 bg-muted rounded-lg border border-border/50">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-primary mr-2">Impact:</span>
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

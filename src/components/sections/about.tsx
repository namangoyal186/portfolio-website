"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Activity, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const philosophyItems = [
  {
    icon: <Terminal className="w-8 h-8 text-primary" />,
    title: "Backend Development",
    description: "Proficient in Java and Spring Boot ecosystems, crafting robust APIs and microservices that form the backbone of enterprise applications.",
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: "Scalability Focus",
    description: "Experienced in designing event-driven architectures with Kafka and RabbitMQ to handle high throughput and ensure seamless horizontal scaling.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Production Reliability",
    description: "Leveraging Docker, Kubernetes, Splunk, and Dynatrace to support deployments and ensure production reliability.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "System Design",
    description: "Turning business requirements into reliable distributed systems, aiming to optimize bottlenecks and reduce latencies.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-outfit mb-4">
              About & Philosophy
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed mt-6 text-center mx-auto"
          >
            I am a backend-focused Software Engineer with over 5 years of experience building reliable 
            enterprise applications. Currently, I work at Optum (UnitedHealth Group), contributing to large-scale 
            healthcare platforms used by millions of users across the US. I strive to design systems that are clean, 
            observable, and scalable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors group">
                <CardContent className="p-6 space-y-4 flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold font-outfit">{item.title}</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

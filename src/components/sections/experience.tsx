"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Optum (UnitedHealth Group)",
    role: "Senior Software Engineer",
    period: "Nov 2025 - Present",
    description: "Contributing to the CAMS (Consumer Account Management System) platform, supporting HSA and HRA account operations used by millions of US employees for tax-advantaged healthcare benefits.",
    responsibilities: [
      "Developing and enhancing Spring Boot microservices for account eligibility, contributions, reimbursements, and transaction workflows.",
      "Enhancing platform reliability by implementing Kafka-based event communication.",
      "Deploying scalable services using Docker & Kubernetes.",
      "Supporting production monitoring and observability through Splunk and Dynatrace.",
    ],
    skills: ["Java 17", "Spring Boot", "Kafka", "Docker", "Kubernetes", "Microservices", "Splunk", "Dynatrace", "GenAI"],
  },
  {
    company: "Amdocs",
    role: "Software Developer (Experienced)",
    period: "Oct 2023 - Oct 2025",
    description: "Led telecom domain order orchestration enhancements and microservices migrations, significantly improving system stability.",
    responsibilities: [
      "Developed and optimized microservices for the SOM to ODO project, revamping critical business services.",
      "Delivered backend services for the Order Delivery Orchestrator (ODO) to streamline telecom order processing by 25%.",
      "Resolved critical issues across ST, SIT, UAT, and production environments, improving system stability by 30%.",
    ],
    skills: ["Java 8", "Spring Boot", "Microservices", "MySQL", "Telecom Domain"],
  },
  {
    company: "Amdocs",
    role: "Associate Software Developer",
    period: "Jul 2021 - Oct 2023",
    description: "Contributed to backend development and automation, significantly improving developer productivity.",
    responsibilities: [
      "Engineered a Bash Scripting-based Inproc tool, replacing manual configuration processes across all environments, achieving a 50% reduction in setup time.",
      "Ensured scalability and reliability with JUnit unit testing and CI/CD integration.",
    ],
    skills: ["Java 8", "Bash Automation", "CI/CD", "Jenkins", "JUnit"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-outfit mb-4">
              Professional Experience
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 pl-6 md:pl-10 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-sm" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-2xl md:text-3xl font-bold font-outfit text-foreground">
                  {exp.role}
                </h3>
                <Badge variant="outline" className="w-fit text-sm font-medium border-primary/50 text-primary">
                  {exp.period}
                </Badge>
              </div>
              
              <h4 className="text-xl font-medium text-muted-foreground mb-4">
                {exp.company}
              </h4>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                {exp.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-base md:text-lg leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-secondary transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

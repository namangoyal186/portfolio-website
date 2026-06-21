"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java (5 years)", "Python", "JavaScript", "C++"],
  },
  {
    title: "Backend Frameworks",
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Flask", "Node.js"],
  },
  {
    title: "Message Queues",
    skills: ["Apache Kafka", "RabbitMQ", "Event-Driven Architecture"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Linux", "Bash Scripting", "CI/CD"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    title: "System Design",
    skills: ["Microservices", "Distributed Systems", "REST APIs", "Design Patterns", "Caching Strategies"],
  },
  {
    title: "Observability",
    skills: ["Splunk", "Dynatrace", "Prometheus", "Grafana", "Log4j"],
  },
  {
    title: "Frontend & Others",
    skills: ["React", "Next.js", "Tailwind CSS", "Git", "Jira", "Agile/Scrum"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Generative AI", "LangChain", "MCP", "RAG", "Vector Databases", "AI Agents"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-outfit mb-4">
              Technical Expertise
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-outfit text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
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

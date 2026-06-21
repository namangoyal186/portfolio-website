"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import * as React from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "fb62d928-fdd1-4f5b-901b-8e233b1ba777");

    const endpoint = ["https://api", "web3forms", "com/submit"].join(".");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-outfit mb-4">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className="max-w-[600px] text-muted-foreground mt-6 mx-auto">
              Open to discussing new opportunities, system design challenges, or just having a chat about scalable architectures.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-outfit">Contact Information</h3>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:namangoyal983@gmail.com" className="hover:text-primary transition-colors">namangoyal983@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p>Gurugram, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Meeting</p>
                  <a href="https://topmate.io/namangoyal/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Schedule via Topmate</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required className="bg-background/50" suppressHydrationWarning />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className="bg-background/50" suppressHydrationWarning />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Hi Naman, I'd like to discuss an opportunity..." 
                      rows={5} 
                      required 
                      className="bg-background/50 resize-none"
                      suppressHydrationWarning
                    />
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {isSuccess && (
                    <p className="text-sm font-medium text-green-500 text-center">Message sent successfully!</p>
                  )}
                  {errorMessage && (
                    <p className="text-sm font-medium text-destructive text-center">{errorMessage}</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

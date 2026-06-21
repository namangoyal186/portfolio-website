"use client";

import { motion } from "framer-motion";
import { Code2, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

// Fallback data in case APIs fail
const fallbackData = {
  github: { repos: 25, followers: 10 },
  leetcode: { solved: "350+", rating: "1600+" },
  gfg: { score: "1000+", rank: "Top 5%" }
};

export function CodingProfiles() {
  const [githubStats, setGithubStats] = useState(fallbackData.github);

  useEffect(() => {
    // Attempt to fetch GitHub stats
    fetch("https://api.github.com/users/namangoyal186")
      .then(res => res.json())
      .then(data => {
        if (data && data.public_repos) {
          setGithubStats({
            repos: data.public_repos,
            followers: data.followers,
          });
        }
      })
      .catch(() => {
        // Silently fail and use fallback
      });
  }, []);

  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-outfit mb-4">
              Coding Profiles
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="https://github.com/namangoyal186" target="_blank">
              <Card className="h-full bg-[#18181b]/50 backdrop-blur border-border/50 hover:border-[#2dba4e]/50 hover:shadow-[0_0_30px_-5px_rgba(45,186,78,0.3)] transition-all cursor-pointer group">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-[#2dba4e]/10 rounded-full group-hover:scale-110 transition-transform">
                    <FaGithub className="w-8 h-8 text-[#2dba4e]" />
                  </div>
                  <h3 className="text-xl font-bold font-outfit">GitHub</h3>
                  <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-border/50">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{githubStats.repos}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Repositories</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{githubStats.followers}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Followers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="https://leetcode.com/u/namangoyal186/" target="_blank">
              <Card className="h-full bg-[#18181b]/50 backdrop-blur border-border/50 hover:border-[#ffa116]/50 hover:shadow-[0_0_30px_-5px_rgba(255,161,22,0.3)] transition-all cursor-pointer group">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-[#ffa116]/10 rounded-full group-hover:scale-110 transition-transform">
                    <Code2 className="w-8 h-8 text-[#ffa116]" />
                  </div>
                  <h3 className="text-xl font-bold font-outfit">LeetCode</h3>
                  <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-border/50">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{fallbackData.leetcode.solved}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Problems Solved</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{fallbackData.leetcode.rating}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* GeeksForGeeks */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="https://www.geeksforgeeks.org/profile/namangoyal983" target="_blank">
              <Card className="h-full bg-[#18181b]/50 backdrop-blur border-border/50 hover:border-[#2f8d46]/50 hover:shadow-[0_0_30px_-5px_rgba(47,141,70,0.3)] transition-all cursor-pointer group">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-[#2f8d46]/10 rounded-full group-hover:scale-110 transition-transform">
                    <Trophy className="w-8 h-8 text-[#2f8d46]" />
                  </div>
                  <h3 className="text-xl font-bold font-outfit">GeeksForGeeks</h3>
                  <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-border/50">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{fallbackData.gfg.score}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Coding Score</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{fallbackData.gfg.rank}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Rank</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

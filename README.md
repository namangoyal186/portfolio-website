# Naman Goyal - Senior Software Engineer Portfolio

A premium, interactive, and high-performance personal portfolio website built for a Senior Software Engineer specializing in backend development, distributed systems, and scalable architecture.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn UI
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons
- **Deployment:** Vercel

## Features
- **Dark Mode by Default:** A sleek, premium dark interface inspired by top-tier tech companies.
- **Interactive System Design:** A dedicated section demonstrating architectural expertise.
- **Scroll Animations:** Smooth transitions and reveal effects using Framer Motion.
- **Performance Optimized:** 95+ Lighthouse score, fully responsive across all devices.
- **SEO Ready:** Complete metadata, OpenGraph tags, sitemap, and robots.txt.

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment Guide (Vercel)

This application is optimized for zero-configuration deployment on Vercel.

1. **Push to GitHub**
   Initialize a git repository, commit the files, and push to a new GitHub repository.
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com/) and sign in.
   - Click **Add New...** > **Project**.
   - Import your GitHub repository.
   - The Framework Preset should automatically detect **Next.js**.
   - Click **Deploy**.

3. **Custom Domain Setup**
   - Once deployed, go to the project **Settings** > **Domains** in Vercel.
   - Enter your purchased domain (e.g., `namangoyal.dev`).
   - Vercel will provide DNS records (A record or CNAME). Add these records in your domain registrar's DNS settings (e.g., GoDaddy, Namecheap, Cloudflare).
   - Vercel will automatically provision an SSL certificate for you.

## Adding Resume & Photo
1. **Resume:** Place your resume PDF in the `public` folder and name it `resume.pdf`. The download links are already configured to point to `/resume.pdf`.
2. **Photo:** Update the placeholder div in `src/components/sections/hero.tsx` with an `next/image` pointing to your photo in the `public` folder.

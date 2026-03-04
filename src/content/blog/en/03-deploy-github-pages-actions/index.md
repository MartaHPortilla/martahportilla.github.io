---
title: "Automated Deployments with GitHub Pages and GitHub Actions using Astro"
description: "Technical documentation concerning the deployment procedure of an Astro project on GitHub Pages, implementing a Continuous Integration (CI/CD) pipeline via GitHub Actions."
date: 2026-02-24
tags: ["Astro", "GitHub Pages", "GitHub Actions", "CI/CD"]
lang: "en"
draft: true
---



> *The other day I was watching my portfolio update after a single command, and I couldn't help but think about the invisible magic happening behind the scenes. There was a time when publishing a website was a handcrafted ritual: dragging files via FTP, crossing your fingers, and hoping nothing broke along the way. Today, that labor falls into invisible hands that work with mathematical precision while I focus on what really matters: creating.*

That "magic" is none other than the technical sovereignty granted by automation. In this post, I want to break down how I’ve configured the gears of GitHub Actions so that my Astro portfolio deploys autonomously, transforming a tedious process into an elegant and professional workflow.

## The CI/CD Philosophy: Automating to Liberate

Deployment automation is built on the pillars of Continuous Integration and Continuous Deployment (CI/CD). It is, in essence, hiring a robotic assistant to handle repetitive tasks for us:

- **Reducing Friction**: We can forget about the local build command to manually upload files. The robot does it in a clean environment every single time.
- **Error-Proofing**: By compiling on an external server (GitHub), we ensure the code is robust and doesn’t depend on the "quirks" or configurations of our local machine.
- **Total Synchronization**: The primary branch (`main`) becomes the single source of truth. What you see in the code is, irrefutably, what’s in production.

## Preparing the Ground on GitHub Pages

Before unleashing the robots, we must tell GitHub where and how we want our work to be displayed. For this portfolio, the process is highly pragmatic:

1. In the repository **Settings**, navigate to the **Pages** section.
2. Under the *Build and deployment* heading, change the **Source** to **GitHub Actions**.

With this simple gesture, we’re telling the platform: "Don't look for static files here; wait for my Actions to deliver the package ready to be served."

## The Gears: The Workflow

For the magic to happen, we need a roadmap of instructions. This map lives in `.github/workflows/deploy.yml`. This is where we define every step of our code’s rite of passage:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main] # Triggered on every push to main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

This file describes an impeccable process: the server wakes up, downloads our code, installs dependencies, generates the site with Astro, and finally delivers the artifacts to the deployment platform.

## Technical Verification: The Pulse of Deployment

Once configured, we can follow the heartbeat of our project from the **Actions** tab on GitHub. There, we’ll see the build and deploy jobs follow one another with a comforting momentum. If the green check appears, the circle has been successfully closed.

## Conclusion: The End of "Doing for the Sake of Doing"

Implementing this workflow isn't just about technical convenience; it’s a statement of intent. By delegating the logistics of deployment, we reclaim the time and energy needed to focus on content architecture and design.

That manual ritual of dragging folders has become a vestige of another era. Now, my portfolio breathes and updates with an autonomy that allows me to simply keep writing. In the next analysis, we’ll move away from the internal gears to focus on what the user actually sees: the semantic structure and the design that brings these words to life.


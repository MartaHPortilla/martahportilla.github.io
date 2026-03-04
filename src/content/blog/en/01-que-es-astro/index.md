---
title: "What Is Astro? Why I Chose It Over React for My Portfolio"
description: "A practical guide to Astro, the modern static site generator. Learn how Islands Architecture works and why I chose Astro over React to build a fast, SEO-friendly portfolio."
date: 2026-02-24
tags: ["Astro", "Static Site Generator", "React vs Astro", "Web Performance", "SEO", "Frontend"]
lang: "en"
draft: false
---

> *The other day I was staring at my screen, the cursor blinking in sync with Creedence Clearwater Revival 😏 over an empty code editor, wondering how I was finally going to build the portfolio I had been postponing for months.*

Sound familiar?

If you're a junior developer, you probably know that feeling. The blank page. The pressure of building your own “about me” from scratch. Starting from absolute zero — stitching together divs and styles in the dark — felt overwhelming and, honestly, inefficient.

Instead of reinventing the wheel, I started looking for a solid foundation. That’s how I discovered Astro.

What began as an attempt to escape the blank page quickly turned into a deep dive into static rendering and modern web architecture. In this article, I’ll explain what Astro is, what problems it solves, and why I chose it over React for my portfolio.

## What is Astro?

[Astro](https://astro.build/) is a modern web framework designed for content-driven websites — blogs, documentation sites, marketing pages, and portfolios.

At its core, Astro is a **static site generator (SSG)** with a strong focus on performance.

Its key features include:

- **Static HTML generation by default.** Unlike frameworks such as **React** or **Vue,** which rely heavily on client-side rendering, Astro generates static HTML at build time.
  
- **Performance-first architecture.** That is, **Astro is designed to be fast.**
  
- **Zero JavaScript by default.** Only the components that truly need interactivity send JavaScript to the browser.
  
- **Framework flexibility for integration.** You can integrate components from React, Vue, Svelte, and others in the same project.

Astro is built aroundthe [**Static Site Generation (SSG)**](https://en.wikipedia.org/wiki/Static_site_generator) model, to which it incorporates a structural advancement called **Islands Architecture**.

> The concept of **Islands Architecture** was generalized by Jason Miller in a [post](https://jasonformat.com/islands-architecture/) that worth a review.

### Islands Architecture Explained

The idea behind [**Islands Architecture**](https://docs.astro.build/en/concepts/islands/) is quite simple: web pages are composed of different, independent **interactive components,** each of which can be rendered **independently**. What does this translate into?

- Both the structure and the key content of the page are rendered as **static HTML,** that is, without unnecessary JavaScript.
  
- **Interactive components** are treated as **isolated** elements or "islands" within the static document (like an image carousel or a contact form).
  
- **Selective hydration** of the islands. The components will be loaded on demand (when the component enters the user's viewport, through ***lazy-loading***).

You may find familiar this isolation methodology if you have foundations in object-oriented programming. It allows the maintenance of optimal page performance without giving up interactivity in the specific elements that require it.

## What Problems Does Astro Solve?

These days, modern web development tends towards the use of Single Page Applications (SPA). However, implementing this powerful pattern in  content-focused websites like a portfolio, SPAs introduce several issues:

1. **JavaScript Overhead**. Large packages (*bundles*) are sent to the user's browser to render views that barely change.

2. **Slow Interactivity**. It worsens the *Time to Interactive* metric (the time required for the page to be fully interactive) and the overall loading time.

3. **SEO Penalty**. *Core Web Vitals* metrics (client-side experience indicators) can be negatively affected.

Faced with this scenario of web heaviness, Astro takes a different approach by simply shipping static HTML first and adding interactivity only where needed. Isn't it just amazing?

## Comparison: Astro vs React for portfolio

Considering the above, when deciding between **building a portfolio with Astro or React**, a small analysis is worthwhile to find the best uses depending on the final purpose of the project.

| Feature | Traditional SPA (React) | Astro Static Site |
| --- | --- | --- |
| **Rendering Strategy** | Client-side Rendering (CSR) or full SSR | Static HTML by default at build time (SSG) |
| **JavaScript Delivery** | Full bundle delivery on load | Minimal JS, selective hydration |
| **Best Use Cases** | Highly interactive apps (SaaS, E-commerce) | Content-driven sites (Blogs, portfolios) |

Where **React** is a great tool for building complex, state-heavy applications, **Astro** stands as the right framework for building fast, SEO-friendly websites.

## Why I Chose Astro for This Project

Remember that initial fear of the blank canvas? Well, that fear pushed me to make a decision: develop this **portfolio with Astro**, based on the following main reasons:

- **Existing Templates.** I cannot deny the existence of [**pre-designed templates**](https://astro.build/themes/) for blogs and portfolios. This made my work significantly smoother.
  
- **Adoption of modern standards.** I was interested in applying performance-centered web development methodologies.
  
- **Architectural learning.** Beginning with the understanding of efficient alternatives to SPA architectures.
  
- **Ease of Deployment.** Native and fluid *Continuous Integration* with platforms such as GitHub Pages.

## SEO and Performance Considerations

From a harsh SEO perspective, a static website offers undeniable advantages:

- **Immediate Indexability.** Search engines semantically process and receive fully rendered HTML without waiting for expensive client-side rendering.
  
- **Lower page weight.** The less JavaScript is sent to the browser, the faster the page loads.
  
- **Strong performance metrics.** Tools like Google Lighthouse (for audit purposes) show high results (near 100/100) in lightweight architectures.

## Final thoughts

That initial fear of the blank page pushed me toward a robust, yet simple architectural decision. Technological criterion requires selecting the right tool for the job — regardless of the framework's popularity.

For this portfolio, whose primary requirements are content clarity, high performance, and SEO positioning, Astro seems to be the perfect fit.

Therefore, maybe next time the cursor blinks threateningly over an empty document, I will remember this: searching for a nice basis is the smartest method of building lasting solutions.

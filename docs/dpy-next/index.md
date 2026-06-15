---
layout: home
title: dpy-next
hero:
  name: "dpy-next"
  text: "The Next-Gen discord.py Ecosystem."
  tagline: "File-based routing, Hot Module Replacement (HMR), and advanced developer tooling natively in Python."
  image:
    src: /dpy-next.png
    alt: dpy-next logo
  actions:
    - theme: brand
      text: Get Started
      link: /dpy-next/guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/dbatnext/dpy-next
---

<script setup>
// Use the same styles as the main homepage
import '../djs-next/index.md'
</script>

<div class="features-section">
  <div class="feature-card">
    <div class="feature-icon">📁</div>
    <div class="feature-title">File-Based Routing</div>
    <div class="feature-desc">Stop writing manual setup code. Your file structure determines your commands, events, and tasks automatically.</div>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🔥</div>
    <div class="feature-title">Hot Module Replacement</div>
    <div class="feature-desc">Save a file and your bot updates live. Never restart your Python process or drop your Gateway connection again.</div>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🛠️</div>
    <div class="feature-title">Scaffolding CLI</div>
    <div class="feature-desc">Instantly bootstrap a production-ready repository structure with <code>create-dpy-next</code>.</div>
  </div>
</div>

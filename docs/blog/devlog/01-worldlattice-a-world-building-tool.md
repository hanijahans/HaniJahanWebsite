---
series: WorldLattice Devlog
title: WorldLattice Devlog 01 — Building a World-Building Tool
status: draft
tags:
  - worldbuilding
  - devlog
  - worldlattice
  - unity
  - procedural-generation
  - game-dev
summary: How WorldLattice started — from the pain of manual tilemaps to building a modular, constraint-based world generation tool for indie game devs.
date: 2025-10-16
---


# 🌍 WorldLattice Devlog #1 — Building a World-Building Tool


## What is WorldLattice?

WorldLattice is a modular, constraint-based generation engine.
My goal: Give indie and small-studio devs a way to conjure rich, story-worthy worlds without having to hand-craft every tile or rule themselves.

**pain → solution**  
I love the pain → solution framework, and I'll talk about it in another post, but let’s look at the specific pain I’m trying to address. One of my lifelong passions has been world-building. But hand-painting every tile in Unity Tilemaps and setting up adjacency rules? It’s slow, it’s not fun, and it kills momentum when you just want to try ideas fast. I saw friends and fellow devs waste time searching for the right tiles or getting stuck building worlds manually. Since I already sell tile packs on the Unity Asset Store ([click here](https://assetstore.unity.com/publishers/115965?utm_source=hanijahan.com&utm_medium=blog&utm_campaign=worldlattice-devlog01)), I thought: **Why not make a tool that actually knows how to use them?**


## **The core architecture:**  
WorldLattice has two main phases:
1. **Generation** (using CSP and WFC-like algorithms)
2. **Awakening/Simulation** (a future layer that simulates growth and change—paused for now; focus is on generation)

Right now, I’m keeping the focus brutally tight: deliver a tool that makes world generation easy and stable, then expand. Making it “alive” comes after the core works for real users.

I already had my own tile sets (grab them [here](https://assetstore.unity.com/publishers/115965?utm_source=hanijahan.com&utm_medium=blog&utm_campaign=worldlattice-devlog01)), so my main obsession became the pipeline and the logic:
- **Inspired by both Simple Tiled and Overlapping Pattern models in WFC:**
    - **Tile-based rules** (hand-authored, symmetry-safe, easy for manual design)
    - **Pattern-based rules** (extracting patterns from sample worlds, learning adjacency automatically)
    - Both rule types implemented as **ScriptableObjects**:
    
- **Automatic vs. Manual Execution:**  
    Users can let the tool do everything, or they can manually intervene—because honestly, total automation is never perfect and sometimes you _want_ a bit of hands-on control.
    
- **Data Visualization:**  
    I’m a data visualization nerd. The tool includes built-in visualizations to help you actually see and debug how the generator is thinking, not just the output.

## What’s Next

Right now, WorldLattice is focused on stable, reliable world generation. Next, I’ll add more simulation and “awakening” features—making worlds that can grow, change, and come alive over time. But first, the basics have to feel _solid_.

If you want to build faster, prototype ideas, or just have fun with procedural generation—WorldLattice is for you.

If you enjoyed this, join [the WorldLattice Discord](https://discord.gg/7pk5Je9bFT) for upcoming devlogs, early previews, and behind-the-scenes chaos.

**— Hani Jahan**  
_WorldLattice Project_

**References:**  
WFC by Maxim Gumin  
[https://github.com/mxgmn/WaveFunctionCollapse](https://github.com/mxgmn/WaveFunctionCollapse)
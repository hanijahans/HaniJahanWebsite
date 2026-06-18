---
title: Real-Time Game Shaders | Unity Shader Graph & Stylized Rendering
description: A collection of real-time game shaders focused on stylized rendering, including Unity Shader Graph water, toon shading, depth-based effects, foam, Fresnel highlights, and vertex animation.
tags: [Unity, Shader]
cover: "/portfolio/shader-water-04.jpg"
category:
  - Portfolio, 6
  - Technical Art, 6
mediaPreview: "hover"
videoEmbed: ""
---

# Stylized URP Shader in Unity Shader Graph

A collection of real-time shader experiments and production-style materials focused on stylized game rendering. These shaders explore readable visual effects, lightweight animation, toon lighting, water surfaces, depth-based blending, Fresnel highlights, and other techniques used to create clear and efficient game visuals.

<div class="image-row1" style="--image-max-width: 500px;">
  <img src="/portfolio/shader-water-04.jpg" alt="Stylized toon shader and water shader examples in Unity">
</div>

The current examples are built in Unity using Shader Graph and URP, with a focus on stylized water and toon-style object shading. The page will expand over time with additional shaders from Unity, Unreal Engine, and other real-time rendering workflows.



## URP Water Shader

A stylized water surface shader built entirely in Unity Shader Graph targeting the Universal Render Pipeline. Designed for game projects where performance and visual clarity matter more than physical realism.

<div class="image-row3">
  <img src="/portfolio/shader-water-01.jpg" alt="Shader">
  <img src="/portfolio/shader-water-02.jpg" alt="Shader">
  <img src="/portfolio/shader-water-03.jpg" alt="Shader">
</div>

### Features

- **Stylized water rendering** — bright, readable water surface designed for game environments rather than physical realism
- **Animated surface waves** — scrolling UV layers and vertex displacement create low-cost surface motion
- **Depth-based color blending** — water color shifts based on scene depth and camera distance
- **Foam and intersection effects** — depth difference is used to create shoreline and object-contact foam
- **Fresnel highlights** — view-angle-based highlights improve shape readability
- **Toon-style surface shading** — simplified lighting, strong color separation, and soft highlight control for stylized objects
- **Game-focused performance** — shader effects are designed to stay lightweight and usable in real-time scenes

### Design Goals

The goal of these shaders is to create stylized real-time materials that read clearly in game environments while staying lightweight. Instead of chasing physical accuracy, the focus is on visual clarity, strong silhouettes, simple controls, and effects that can support gameplay cameras and stylized worlds.

The water shader was designed to tile across larger surfaces, blend visually around intersecting geometry, and provide enough motion to feel alive without requiring simulation. The toon shader explores simplified lighting and color separation for readable stylized assets.

### Tools and Techniques

- Unity Shader Graph
- Universal Render Pipeline
- Scene Depth for water blending and foam masks
- Fresnel effects for view-angle highlights
- UV scrolling for animated surface motion
- Vertex displacement for low-cost wave movement
- Toon-style lighting and simplified color ramps

[Back to Portfolio](https://hanijahan.com/portfolio/)

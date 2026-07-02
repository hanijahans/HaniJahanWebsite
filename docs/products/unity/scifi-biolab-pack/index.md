---
title: Modular Sci-Fi Bio Lab Pack
description: "External documentation for a stylized modular sci-fi bio lab tileset for Unity."
outline: deep
---

# Modular Sci-Fi Bio Lab Pack

<p align="center">
  <a href="https://assetstore.unity.com/packages/3d/324212" target="_blank">
    <img src="/portfolio/unity-asset-scifi-lab-kit-01.png" alt="Stylized Blocks Pack" width="800">
  </a>
</p>

<p align="center">
  <a href="https://assetstore.unity.com/packages/3d/324212" target="_blank">
    <strong>🟢 View on Unity Asset Store</strong>
  </a>
</p>


---

A clean, stylized modular tile set for building sci-fi laboratories, bio labs, platformer spaces, puzzle rooms, and grid-based Unity levels. The pack is designed for fast scene assembly, lightweight performance, and a shared color-palette workflow that keeps materials simple.

- [Documentation](#documentation)
- [Setup Notes](#setup-notes)
- [Contact & License](#contact-license)
- [What's New](#what-s-new-changelog)

## Documentation

### Package Contents

| Folder / Asset | Contents |
| --- | --- |
| `Models/` | Structural elements, interactive pieces, display and lighting props, containers, pipes, cables, and decorative lab/environment assets. |
| `Prefabs/` | Ready-to-use prefabs for all models, plus FX prefabs such as Electric and Fog. |
| `Materials/` | Main Built-in and URP materials, green/red glass materials, FX materials, and two sky/background material variations. |
| `Textures/` | `HJD_SFB_ColorPal_01/02/03`, `HJD_SFB_Icon_01/02`, and `HJD_SFB_FX_circle`. |
| `Scenes/` | `HJD_SFB_ContentPreview` asset layout and `HJD_SFB_SampleScene01/02` demo scenes. |
| Root folder | `HJD_SFB_ReferenceImage_01/02.png` sample-scene reference screenshots. |

### Included Asset Categories

**Structural elements:**
- Platforms
- Walls
- Bridge
- Ramp
- Stairs
- Ladder
- Fence

**Interactive and gameplay props:**
- Doors
- Buttons
- Hazards
- Control panels
- Collectible

**Display, lighting, and lab dressing:**
- Screens and monitors
- Lamp
- Crate and chest
- Capsules
- Fauna specimens
- Lab decoration pieces

**Connectors and environment details:**
- Straight pipes
- Corner pipes
- Straight cables
- Corner cables
- Electric and fog FX prefabs

---

### Quick Start

1. Import the package into a Unity 2020.3 LTS or newer project.
2. Open `Scenes/HJD_SFB_ContentPreview` to review the complete asset layout.
3. Open `Scenes/HJD_SFB_SampleScene01` or `Scenes/HJD_SFB_SampleScene02` to view example scene setups.
4. Drag prefabs from `Prefabs/` into your level.
5. Assign the material that matches your render pipeline:
   - **Built-in Render Pipeline:** use `HJD_SFB_BuiltIn.mat`.
   - **Universal Render Pipeline (URP):** use `HJD_SFB_URP.mat`.
6. Use Unity grid snapping for quick modular placement with the pivot-centered, grid-aligned pieces.

---

### Render Pipeline Support

| Render Pipeline | Support |
| --- | --- |
| Built-in Render Pipeline | Supported with included Built-in materials. |
| Universal Render Pipeline (URP) | Supported with included URP materials. |
| High Definition Render Pipeline (HDRP) | Not included or tested. |

### Technical Highlights

- Models are provided in `.fbx` format.
- Most meshes are approximately 100–300 triangles.
- Materials use Base Color maps only.
- No normal, roughness, metallic, or emission maps are required.
- No custom shaders or scripts are required.
- Modular pieces are designed for grid-based placement and fast prototyping.
- Shared color-palette texture workflow keeps the package lightweight.
- Compatible with Unity 2020.3 LTS or newer.
- No external dependencies.

## Setup Notes

### Built-in Render Pipeline

Use the included Built-in materials for the main palette, glass colors, FX, and sky/background materials. If a prefab appears pink, confirm the correct Built-in material is assigned.

### Universal Render Pipeline (URP)

Use the included URP materials when the project is configured for URP. If materials appear pink after importing into an existing URP project, reassign the corresponding URP material from the `Materials/` folder.

### Scene Assembly Tips

- Enable grid snapping for fast blockout and clean modular placement.
- Start from the content preview scene when checking scale and pivot placement.
- Build a small room kit first, then duplicate sections to create longer corridors or larger labs.
- Use the glass, monitor, cable, pipe, fog, and electric FX prefabs to add visual variety without adding complex setup.

## Contact & License

Created by: **Hani Jahan Design (HJD)**

**Community & Support:**  
Join the HJD Discord to:  
- Share feedback & ideas  
- Ask questions & get support  
- See upcoming tools and packs  

👉 [discord.gg/xpcfCyaycx](https://discord.gg/xpcfCyaycx) 

Use the license terms provided with the Unity Asset Store package for redistribution and project usage rights.

Thank you for using the **Hani Jahan Design – Modular Sci-Fi Bio Lab Pack**. Keep creating! 💚

## What's New (Changelog)

### 1.0.0 — Initial Release

- Added modular sci-fi bio lab models and prefabs.
- Added Built-in Render Pipeline and URP material sets.
- Added green and red glass material variants.
- Added electric and fog FX prefabs.
- Added content preview scene and two sample scenes.
- Added shared color-palette textures and reference images.

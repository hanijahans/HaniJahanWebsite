---
title: Basic Game Tiles – Stylized Blocks Prototyping Pack
outline: deep
---

# Free Modular 3D Platformer Pack – Stylized Blocks Prototyping Pack

<!-- Add a header section with the link and preview images -->

<p align="center">
  <a href="https://assetstore.unity.com/packages/3d/environments/lowpoly-platformer-kit-free-modular-stylized-blocks-319018" target="_blank">
    <img src="/products/assets/freepack_header.png" alt="Stylized Blocks Pack" width="800">
  </a>
</p>

<p align="center">
  <a href="https://assetstore.unity.com/packages/3d/environments/lowpoly-platformer-kit-free-modular-stylized-blocks-319018" target="_blank">
    <strong>🟢 View on Unity Asset Store</strong>
  </a>
</p>

---

This free modular 3D tile pack is designed for quick prototyping of platformers, puzzle games, and block-based environments. Every asset is lightweight, stylized, and optimized using a shared color palette texture and unified materials to keep performance high and draw calls low.

- [Documentation](#documentation)
- [Contact & License](#contact-license)
- [What's New](#what-s-new-changelog)


## Documentation
Clean, modular tiles for rapid prototyping of 3D platformers, puzzles, and grid-based levels in Unity.
### Package Contents

**Models & Prefabs:**
- 13 Platforms (9 in v1.0.0 → expanded to 13 in v1.1.0) – flat, block, ramp/slope, floating, bridge 
- 2 Hazards – spikes ×2
- 10 Interactables – crate, key, coin, door, 2 buttons, ladder, lever, torch  

**Materials:**
- `HJD_BuiltIn_Normal.mat` – Single shared material for Built-in Render Pipeline
- `HJD_URP_Normal.mat` – Single shared material for Universal Rendering pipeline (URP)  

**Textures:**
- `HJD_ColorPal_Normal_01/02.png` – 1024×1024 PNG (~3 KB) shared palette, 2 variations  
- `HJD_Cloud00` – 1024×1024 PNG (decorative cloud with alpha)  
- `HJD_SkyGradient` – 1024×1536 PNG (vertical gradient background)  

**Scenes:**
- `HJD_FP_ContentPreview` – Full prefab overview  
- `HJD_FP_SampleScene_01` – Sample demo scene  

**Editor Tools:**
- `MyAssetWelcome.cs` – opening Welcome Window with quick links to docs, support, and updates  

---

### Quick Start
1. Open any Unity 2020.3+ project.  
2. Drag prefabs from `Assets/HaniJahanDesign/FreePack/Prefabs` into your scene.  
3. Apply the correct material based on your render pipeline:  
   - URP – Use the `HJD_URP_Normal` material.  
   - Built-in RP – Use the `HJD_BuiltIn_Normal` material.  
4. All tiles are pivot-centered and grid-aligned for easy snapping.  

---

### Technical Highlights
- Models provided in `.fbx` format  
- Pivot-centered, grid-aligned geometry for easy snapping  
- Ultra low-poly (28–288 tris; most under 200)  
  - Platforms: 28–52  
  - Slopes/Bridges: 36–168  
  - Hazards: 180–196  
  - Interactables: Coin 116, Crate 188, Torch 261, Key 276, Lever 288  
- UVs: non-overlapping, packed for efficiency  
- Uses a single shared material and palette texture (2 variations)  
- Supports Built-in + URP (materials included)  
- No external dependencies or custom shaders  
- Compatible with Unity 2020.3 LTS or newer  
- Designed for clarity, speed, and early gameplay testing  


## Contact & License
Created by: **Hani Jahan Design (HJD)**  

**License:**  
Free to use in commercial or personal Unity projects.  
(Attribution not required, but always appreciated. Redistribution of the pack itself is not permitted.)  

**Credits & Thanks:**  
If this pack helps your project, a simple mention of Hani Jahan Design in your work or socials goes a long way. ✨  

**Community & Support:**  
Join the HJD Discord to:  
- Share feedback & ideas  
- Ask questions & get support  
- See upcoming tools and packs  

👉 [discord.gg/7pk5Je9bFT](https://discord.gg/7pk5Je9bFT)  

**More Info & Contact:**  
[Contact Page](https://www.hanijahan.com/contact)

Thank you for using the **Hani Jahan Design – Modular 3D Platformer Pack!**  
Keep creating 💛


## What's New (Changelog)


**1.1.0 — Update**
- Added Welcome Window scripts with quick links to docs, support, and updates 
- Updated all models → reduced poly counts for better performance  
- Added 4 new block variations (expanded platform options)  
- Added 1 new color palette variation (extra style choice)  
- Improved model and prefab naming for clarity

---

**1.0.0 — Initial Release**
- 9 platforms (flat, block, ramp/slope, floating, bridge)  
- 2 hazards (2× spikes)  
- 10 interactables (crate, key, coin, door, 2 buttons, ladder, lever, torch)  
- Single-material workflow (URP/Built-in)  


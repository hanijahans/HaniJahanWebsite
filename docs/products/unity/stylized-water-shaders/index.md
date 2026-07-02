---
title: Stylized Water Shader Variants
description: "External documentation for Built-in and URP stylized water shader variants for Unity."
outline: deep
---

# Stylized Water Shader Variants

<p align="center">
  <a href="https://assetstore.unity.com/packages/3d/324212" target="_blank">
    <img src="/portfolio/unity-asset-stylized-water-shader-01.png" alt="Stylized Blocks Pack" width="800">
  </a>
</p>

<p align="center">
  <a href="https://assetstore.unity.com/packages/3d/324212" target="_blank">
    <strong>🌊 View on Unity Asset Store</strong>
  </a>
</p>

---

Stylized Water Shader Variants includes ready-to-use water materials, demo scenes, a Built-in compatible handwritten ShaderLab shader, and URP Shader Graph variants for orthographic and perspective projects.

- [Documentation](#documentation)
- [URP Setup Notes](#urp-setup-notes)
- [Contact & License](#contact-license)
- [What's New](#what-s-new-changelog)

## Documentation

### Package Contents

| Folder / Asset | Contents |
| --- | --- |
| `Materials/` | Ready-made material presets for the included water shaders. |
| `Scenes/` | Demo scenes for Built-in and URP workflows. |
| `Shaders/Handwritten_BuiltIn/` | Built-in Render Pipeline ShaderLab shader and compatibility notes. |
| `Shaders/ShaderGraph_URP/` | URP Shader Graph assets and reusable subgraphs. |
| `Textures/` | Water pattern texture used by the demo materials. |
| Root folder | README, changelog, license terms, and third-party notices. |

### Included Shader Options

**`StylizedWater_WaveFoam`**
- Built-in compatible handwritten ShaderLab shader.
- Includes feature toggles for common stylized-water effects.
- Supports vertex wave motion, depth fade, Fresnel, intersection foam, animated foam texture, and Voronoi or texture-based ripple controls.

**`ShaderGraph_StylizedWater_Orthographic`**
- URP Shader Graph setup for orthographic scenes.
- Useful for top-down, isometric, and stylized scene presentations.

**`ShaderGraph_StylizedWater_Perspective_Lit`**
- URP Shader Graph setup for perspective scenes.
- Designed for projects that need lit water and depth-based interaction effects.

---

### Quick Start

1. Import the package into a Unity project.
2. Open the demo scene that matches your render pipeline and camera style:
   - **Built-in Render Pipeline:** open `Scenes/StylizedWater_Demo_BuiltIn`.
   - **URP orthographic:** open `Scenes/StylizedWater_Demo_URP_Orthographic`.
   - **URP perspective:** open `Scenes/StylizedWater_Demo_URP_Perspective`.
3. Drag a water material from `Materials/` onto your water mesh.
4. Adjust the exposed material properties for water color, foam, waves, ripples, depth fade, Fresnel, and transparency.
5. For URP scenes, confirm the required render textures are enabled as described in the setup notes below.

---

### Render Pipeline Support

| Render Pipeline | Support |
| --- | --- |
| Built-in Render Pipeline | Supported with the handwritten shader and Built-in materials in `Materials/Handwritten_BuiltIn/`. |
| Universal Render Pipeline (URP) | Supported with Shader Graph shaders and URP materials in `Materials/ShaderGraph_URP/`. |
| High Definition Render Pipeline (HDRP) | Not included or tested. |

### Technical Highlights

- Includes one Built-in compatible handwritten ShaderLab shader.
- Includes URP Shader Graph variants for orthographic and perspective workflows.
- Exposes controls for color, foam, waves, ripples, depth fade, Fresnel, transparency, and texture-driven water detail.
- Includes reusable Shader Graph subgraphs and demo materials.
- Supports depth fade and intersection foam where the render pipeline and camera settings provide depth data.
- Includes material presets so teams can start from working water styles instead of configuring every property from scratch.

## URP Setup Notes

The URP perspective water shader uses the camera depth texture to build depth fade and intersection foam around objects that enter the water. If foam appears in Scene View but is missing in Game View, the Game camera is usually not rendering a depth texture.

Recommended setup for the demo scenes:

1. Open the active URP Render Pipeline Asset and enable **Depth Texture**.
2. If you do not want this globally, select the Game camera and set **Rendering > Depth Texture** to **On** instead of **Use Pipeline Settings**.
3. Enable **Opaque Texture** as well when using the refractive water material.
4. Confirm the intersecting objects render before the transparent water surface and are included in the camera culling mask.

Depth Texture drives foam and depth fade. Opaque Texture drives the screen-color sampling used by refraction.

### Troubleshooting

- **Pink material:** confirm the shader variant matches your render pipeline and that URP Shader Graph dependencies are available in URP projects.
- **No intersection foam in Game View:** enable Depth Texture on the URP pipeline asset or on the Game camera.
- **No refraction:** enable Opaque Texture for URP refraction materials.
- **Sorting issues:** confirm intersecting meshes render before the transparent water surface and are included in the camera culling mask.
- **Water too strong or too subtle:** tune foam, depth fade, Fresnel, wave, ripple, and transparency controls from the assigned material.

## Contact & License

Created by: **Hani Jahan Design (HJD)**

**Community & Support:**  
Join the HJD Discord to:  
- Share feedback & ideas  
- Ask questions & get support  
- See upcoming tools and packs  

👉 [discord.gg/xpcfCyaycx](https://discord.gg/xpcfCyaycx) 

Use the support contact configured on the Unity Asset Store publisher page for this asset. Use the license terms provided with the Unity Asset Store package for redistribution and project usage rights.

Thank you for using the **Hani Jahan Design – Stylized Water Shader Variants**. Keep creating! 💙

## What's New (Changelog)

### 1.0.0 — Initial Release

- Added Built-in compatible handwritten stylized water shader.
- Added URP Shader Graph variants for orthographic and perspective scenes.
- Added material presets for the included water shaders.
- Added demo scenes for Built-in and URP workflows.
- Added reusable Shader Graph subgraphs and water texture resources.
- Added setup notes for Depth Texture, Opaque Texture, foam, depth fade, and refraction workflows.

export type PortfolioItem = {
  title: string
  subtitle?: string
  role?: string
  year?: string
  tags?: string[]
  cover: string     // path under /public
  url?: string      // external link or internal route
  description?: string
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Procedural Terrain System",
    subtitle: " ",
    role: "Technical Artist",
    year: "2024",
    tags: ["Houdini", "Procedural", "Tools", "Terrain"],
    cover: "/portfolio/procedural-terrain.png",
    url: "/portfolio/procedural-terrain", // or external if you prefer
    description:
      "Terrain generator for flexible world layout and stylized ecosystems: flattening, erosion-based detail, and slope-aware scattering for roads, cities, and natural flow."
  },
  {
    title: "Procedural Vegetation Toolkit",
    subtitle: " ",
    role: "Technical Artist",
    year: "2024",
    tags: ["Houdini", "Procedural", "Tools", "Vegetation"],
    cover: "/portfolio/procedural-vegetation.png",
    url: "/portfolio/procedural-vegetation",
    description:
      "Fully procedural vegetation tools with control over variation and instancing. Scales from dense forests to decorative foliage; built for fast iteration and visual diversity."
  },
  {
    title: "Modular Building Generator",
    subtitle: " ",
    role: "Technical Artist",
    year: "2024",
    tags: ["Houdini", "Procedural", "Tools", "Modular"],
    cover: "/portfolio/modular-building.png",
    url: "/portfolio/modular-building",
    description:
      "Generates structures from simple grids: customizable facades, floors, roof styles, and material variation. Game-ready, modular, and iteration-friendly."
  },
  {
    title: "Visual Foundations",
    subtitle: "Composition, color, lighting studies",
    role: "Environment Artist",
    tags: ["Composition", "Lighting", "Storytelling"],
    cover: "/portfolio/visual-foundations.jpg",
    url: "/portfolio/visual-foundations",
    description:
      "Ongoing study and application of visual storytelling, color theory, composition, and lighting—applied to real-time environments."
  },
  {
    title: "Algorithmic Design",
    subtitle: " ",
    role: "Tech Art / R&D",
    year: "2024",
    tags: ["Algorithms", "Procedural", "WFC", "Space Colonization"],
    cover: "/portfolio/technical-systems.png",
    url: "/portfolio/technical-systems",
    description:
      "Custom procedural logic: Wave Function Collapse for tile-based layouts; Space Colonization for stylized trees/veins in NPR-style worlds."
  },
  {
    title: "Artist-Friendly Toolset",
    subtitle: " ",
    role: "Technical Artist",
    year: "2024",
    tags: ["Houdini", "Procedural", "Tools"],
    cover: "/portfolio/artist-friendly-toolset.png",
    url: "/portfolio/artist-friendly-toolset",
    description:
      "A suite of HDAs for environment artists: measurement systems, slope detectors, scatter controls, and layout visualizers—usable by technical and non-technical teammates."
  }
];
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
    subtitle: "Diorama-style terrain generator",
    role: "Technical Artist / Tools",
    year: "2025",
    tags: ["Houdini", "Procedural", "Terrain", "Tools"],
    cover: "/portfolio/procedural-terrain.png",
    url: "/portfolio/procedural-terrain", // or external if you prefer
    description:
      "Terrain generator for flexible world layout and stylized ecosystems: flattening, erosion-based detail, and slope-aware scattering for roads, cities, and natural flow."
  },
  {
    title: "Procedural Vegetation Toolkit",
    subtitle: "Rule-based variation & instancing",
    role: "Technical Artist / Tools",
    year: "2025",
    tags: ["Houdini", "Vegetation", "Scattering", "NPR"],
    cover: "/portfolio/procedural-vegetation.png",
    url: "/portfolio/procedural-vegetation",
    description:
      "Fully procedural vegetation tools with control over variation and instancing. Scales from dense forests to decorative foliage; built for fast iteration and visual diversity."
  },
  {
    title: "Modular Building Generator",
    subtitle: "Townhouse/apartment HDA",
    role: "Technical Artist / HDA",
    year: "2025",
    tags: ["Houdini", "HDA", "Architecture", "Modular"],
    cover: "/portfolio/modular-building.png",
    url: "/portfolio/modular-building",
    description:
      "Generates structures from simple grids: customizable facades, floors, roof styles, and material variation. Game-ready, modular, and iteration-friendly."
  },
  {
    title: "Visual Foundations",
    subtitle: "Composition, color, lighting studies",
    role: "Environment Artist",
    year: "2025",
    tags: ["Composition", "Color", "Lighting", "Storytelling"],
    cover: "/portfolio/visual-foundations.jpg",
    url: "/portfolio/visual-foundations",
    description:
      "Ongoing study and application of visual storytelling, color theory, composition, and lighting—applied to real-time environments."
  },
  {
    title: "Technical Systems — Algorithms",
    subtitle: "WFC & Space Colonization",
    role: "Tech Art / R&D",
    year: "2025",
    tags: ["Algorithms", "WFC", "Space Colonization", "Procedural"],
    cover: "/portfolio/technical-systems.png",
    url: "/portfolio/technical-systems",
    description:
      "Custom procedural logic: Wave Function Collapse for tile-based layouts; Space Colonization for stylized trees/veins in NPR-style worlds."
  },
  {
    title: "Artist-Friendly Toolset",
    subtitle: "Measurement, slope, scatter, layout",
    role: "Tools Engineer",
    year: "2025",
    tags: ["Houdini", "HDAs", "UX for Artists"],
    cover: "/portfolio/artist-friendly-toolset.png",
    url: "/portfolio/artist-friendly-toolset",
    description:
      "A suite of HDAs for environment artists: measurement systems, slope detectors, scatter controls, and layout visualizers—usable by technical and non-technical teammates."
  }
];
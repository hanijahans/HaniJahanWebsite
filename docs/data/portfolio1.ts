export type PortfolioItem = {
  title: string
  subtitle?: string
  role?: string
  year?: string
  tags?: string[]
  cover: string     // path under /public
  video?: string    // optional mp4/webm path under /public
  videoEmbed?: string // optional embed URL (e.g. YouTube)
  url?: string      // external link or internal route
  description?: string
};

export const houdini: PortfolioItem[] = [
  {
    title: "Procedural Terrain System",
    subtitle: " ",
    tags: ["Procedural", "Tools", "Terrain"],
    cover: "/portfolio/procedural-terrain.png",
    videoEmbed: "https://www.youtube.com/embed/GBCFRYMkSrY?rel=0",
    url: "/portfolio/procedural-terrain", // or external if you prefer
    description:
      "Terrain generator for flexible world layout and stylized ecosystems: flattening, erosion-based detail, and slope-aware scattering for roads, cities, and natural flow."
  },
  {
    title: "Procedural Vegetation Toolkit",
    subtitle: " ",
    tags: ["Procedural", "Tools", "Vegetation"],
    cover: "/portfolio/procedural-vegetation.png",
    url: "/portfolio/procedural-vegetation",
    description:
      "Fully procedural vegetation tools with control over variation and instancing. Scales from dense forests to decorative foliage; built for fast iteration and visual diversity."
  },
  {
    title: "Modular Building Generator",
    subtitle: " ",
    tags: ["Procedural", "Tools", "Modular", "Building"],
    cover: "/portfolio/modular-building.png",
    url: "/portfolio/modular-building",
    description:
      "Generates structures from simple grids: customizable facades, floors, roof styles, and material variation. Game-ready, modular, and iteration-friendly."
  },
  {
    title: "Algorithmic Design",
    subtitle: " ",
    tags: ["Procedural", "WFC", "Space Colonization"],
    cover: "/portfolio/technical-systems.png",
    url: "/portfolio/technical-systems",
    description:
      "Custom procedural logic: Wave Function Collapse for tile-based layouts; Space Colonization for stylized trees/veins in NPR-style worlds."
  },
  {
    title: "Artist-Friendly Toolset",
    subtitle: " ",
    tags: ["Procedural", "Tools"],
    cover: "/portfolio/artist-friendly-toolset.png",
    url: "/portfolio/artist-friendly-toolset",
    description:
      "A suite of HDAs for environment artists: measurement systems, slope detectors, scatter controls, and layout visualizers—usable by technical and non-technical teammates."
  }
];

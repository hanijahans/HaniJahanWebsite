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

export const houdini: PortfolioItem[] = [
  {
    title: "Procedural Terrain System",
    subtitle: " ",
    tags: ["Procedural", "Tools", "Terrain"],
    cover: "/houdini/procedural-terrain.png",
    url: "/portfolio/procedural-terrain", // or external if you prefer
    description:
      "Terrain generator for flexible world layout and stylized ecosystems: flattening, erosion-based detail, and slope-aware scattering for roads, cities, and natural flow."
  },
  {
    title: "Algorithmic Design",
    subtitle: " ",
    tags: ["Procedural", "WFC", "Space Colonization"],
    cover: "/houdini/technical-systems.png",
    url: "/portfolio/technical-systems",
    description:
      "Custom procedural logic: Wave Function Collapse for tile-based layouts; Space Colonization for stylized trees/veins in NPR-style worlds."
  },
];

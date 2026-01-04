export type HoudiniItem = {
  title: string
  subtitle?: string
  role?: string
  year?: string
  tags?: string[]
  cover: string     // path under /public
  url?: string      // external link or internal route
  description?: string
};

export const houdini: HoudiniItem[] = [
  {
    title: "Procedural Terrain System",
    subtitle: " ",
    tags: ["Procedural", "Tools", "Terrain"],
    cover: "/houdini/procedural-terrain.png",
    url: "/houdini/procedural-terrain", // or external if you prefer
    description:
      "Terrain generator for flexible world layout and stylized ecosystems: flattening, erosion-based detail, and slope-aware scattering for roads, cities, and natural flow."
  },
  {
    title: "Procedural Vegetation Toolkit",
    subtitle: " ",
    tags: ["Procedural", "Tools", "Vegetation"],
    cover: "/houdini/procedural-vegetation.png",
    url: "/houdini/procedural-vegetation",
    description:
      "Fully procedural vegetation tools with control over variation and instancing. Scales from dense forests to decorative foliage; built for fast iteration and visual diversity."
  },
  {
    title: "Modular Building Generator",
    subtitle: " ",
    tags: ["Procedural", "Tools", "Modular", "Building"],
    cover: "/houdini/modular-building.png",
    url: "/houdini/modular-building",
    description:
      "Generates structures from simple grids: customizable facades, floors, roof styles, and material variation. Game-ready, modular, and iteration-friendly."
  },
  {
    title: "Algorithmic Design",
    subtitle: " ",
    tags: ["Procedural", "WFC", "Space Colonization"],
    cover: "/houdini/technical-systems.png",
    url: "/houdini/technical-systems",
    description:
      "Custom procedural logic: Wave Function Collapse for tile-based layouts; Space Colonization for stylized trees/veins in NPR-style worlds."
  },
  {
    title: "Artist-Friendly Toolset",
    subtitle: " ",
    tags: ["Procedural", "Tools"],
    cover: "/houdini/artist-friendly-toolset.png",
    url: "/houdini/artist-friendly-toolset",
    description:
      "A suite of HDAs for environment artists: measurement systems, slope detectors, scatter controls, and layout visualizers—usable by technical and non-technical teammates."
  }
];
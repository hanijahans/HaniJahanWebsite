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
    title: "DNA",
    subtitle: " ",
    tags: ["", "", ""],
    cover: "/portfolio/dna-01.png",
    url: "/portfolio_archive/bio-dna", // or external if you prefer
    description:
      ""
  },
  {
    title: "Algorithmic Design",
    subtitle: " ",
    tags: ["Procedural", "WFC", "Space Colonization"],
    cover: "/portfolio/technical-systems.png",
    url: "/portfolio_archive/technical-systems",
    description:
      "Custom procedural logic: Wave Function Collapse for tile-based layouts; Space Colonization for stylized trees/veins in NPR-style worlds."
  },
];

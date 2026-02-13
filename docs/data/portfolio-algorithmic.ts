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
    title: "Superformula",
    subtitle: " ",
    tags: ["Algorithmic", "", ""],
    cover: "/portfolio/superformula-01.jpg",
    url: "/portfolio_archive/algorithm-superformula", // or external if you prefer
    description:
      ""
  },
    {
    title: "Space Colonization",
    subtitle: " ",
    tags: ["Algorithmic", "Space Colonization", "Tree"],
    cover: "/portfolio/space-colonization-01.png",
    url: "/portfolio_archive/algorithm-space-colonization",
    description:
      "Space Colonization for stylized trees/veins in NPR-style worlds."
  },
  {
    title: "Wave Function Collapse",
    subtitle: " ",
    tags: ["Algorithmic", "WFC", "World Building"],
    cover: "/portfolio/wfc-01.png",
    url: "/portfolio_archive/algorithm-wfc",
    description:
      "Wave Function Collapse for tile-based layouts."
  },
];

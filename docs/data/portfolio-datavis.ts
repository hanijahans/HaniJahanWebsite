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
    title: "Air Mobility",
    subtitle: "",
    tags: ["Data", "Visualization"],
    cover: "/portfolio/data-vis-flights-01.jpg",
    description:
      ""
  },
  {
    title: "New York Subway",
    subtitle: "",
    tags: ["Data", "Visualization"],
    cover: "/portfolio/data-newyork-subway-01.png",
    description:
      ""
  },
];

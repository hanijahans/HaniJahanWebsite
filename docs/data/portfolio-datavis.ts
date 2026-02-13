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
    title: "Flights",
    subtitle: "",
    tags: ["Data Visualization", "Mobility", ],
    cover: "/portfolio/data-vis-flights-01.png",
    url: "/portfolio-archive/data-flights",
    description:
      ""
  },
  {
    title: "New York Subway",
    subtitle: "",
    tags: ["Data Visualization", "Mobility"],
    cover: "/portfolio/data-newyork-subway-01.png",
    // url: "/portfolio-archive/data-nyc-subway",
    description:
      ""
  },
];

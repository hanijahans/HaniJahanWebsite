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
    url: "/portfolio-archive/bio-dna", // or external if you prefer
    description:
      ""
  },
  {
    title: "Dental",
    subtitle: " ",
    tags: ["Medical", "", ""],
    cover: "/portfolio/dental-01.png",
    url: "/portfolio-archive/medical-dental",
    description:
      ""
  },
];

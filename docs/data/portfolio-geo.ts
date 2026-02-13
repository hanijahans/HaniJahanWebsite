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
    title: "Multi-Format Data Visualization",
    subtitle: "Data → Visualization",
    tags: ["Geospatial", "Data", "Visualization"],
    cover: "/portfolio/geo-data-geojson.png",
    description:
      "Visualization pipeline supporting multiple data types, translating raw datasets into interactive, readable spatial views."
  },
  {
    title: "LiDAR Visualization",
    subtitle: "Point Cloud Rendering",
    tags: ["LiDAR", "Point Cloud", "Visualization"],
    cover: "/portfolio/geo-data-lidar-vis.png",
    description:
      "LiDAR point-cloud rendering workflows for dense geospatial scans, optimized for clarity and scale."
  },
  {
    title: "On-Demand Terrain Streaming",
    subtitle: "Mapbox / OpenTopo / Satellite",
    tags: ["Streaming", "Terrain", "Data"],
    cover: "/portfolio/geo-data-terrain-automated.png",
    description:
      "Automated download and streaming pipeline for terrain data, enabling on-demand ingestion from Mapbox, OpenTopo, and satellite providers."
  },
];

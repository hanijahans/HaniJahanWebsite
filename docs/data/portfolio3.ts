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
    cover: "/portfolio/procedural-terrain.png",
    url: "/portfolio/procedural-terrain", // or external if you prefer
    description:
      "Terrain generator for flexible world layout and stylized ecosystems: flattening, erosion-based detail, and slope-aware scattering for roads, cities, and natural flow."
  },
  {
    title: "Multi-Format Data Visualization",
    subtitle: "Data → Visualization",
    tags: ["Geospatial", "Data", "Visualization"],
    cover: "/portfolio/geo-data-geojson.png",
    description:
      "Visualization pipeline supporting multiple data types, translating raw datasets into interactive, readable spatial views."
  },
  {
    title: "Scale-Accurate Terrain Synthesis",
    subtitle: "DEM + Satellite Data",
    tags: ["Terrain", "DEM", "Satellite"],
    cover: "/portfolio/geo-data-terrain-accuracy.png",
    description:
      "Terrain synthesis driven by DEM and satellite sources to preserve scale accuracy from regional context down to local detail."
  },
  {
    title: "On-Demand Terrain Streaming",
    subtitle: "Mapbox / OpenTopo / Satellite",
    tags: ["Streaming", "Terrain", "Data"],
    cover: "/portfolio/geo-data-terrain-automated.png",
    description:
      "Automated download and streaming pipeline for terrain data, enabling on-demand ingestion from Mapbox, OpenTopo, and satellite providers."
  },
  {
    title: "On-Demand City Data Streaming",
    subtitle: "Auto Download Tooling",
    tags: ["Streaming", "City", "Data"],
    cover: "/portfolio/geo-data-city-automated.png",
    description:
      "Auto-download toolchain for city-scale datasets, delivering fresh data into visualization and simulation workflows."
  },
  {
    title: "GeoJSON Reader + Visualization",
    subtitle: "Vector Data Pipelines",
    tags: ["GeoJSON", "Vector", "Visualization"],
    cover: "/portfolio/geo-data-geojson.png",
    description:
      "GeoJSON ingestion with interactive visualization to explore and validate vector-based geospatial datasets."
  },
  {
    title: "LiDAR Visualization",
    subtitle: "Point Cloud Rendering",
    tags: ["LiDAR", "Point Cloud", "Visualization"],
    cover: "/portfolio/geo-data-lidar-vis.png",
    description:
      "LiDAR point-cloud rendering workflows for dense geospatial scans, optimized for clarity and scale."
  },
];

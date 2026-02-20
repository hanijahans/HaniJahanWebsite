---
title: Spatial Accessibility in New York City
description: A procedural analysis of subway infrastructure, school districts, and residential buildings to support neighborhood-level decision-making.
category: Data Visualization
categoryOrder: 2
order: 2
---

# Spatial Accessibility in New York City

![Preview](/portfolio/data-newyork-subway-01.png)

## Research Question

How can families evaluate neighborhood suitability based on transit access, school district boundaries, and building-level proximity to subway infrastructure?

Urban decisions are often made using fragmented datasets. This project integrates transit lines, entrances, school districts, building footprints, and ridership density into a unified spatial model.

## Method

Using Houdini as a procedural geospatial engine:

- Imported NYC subway lines and entrances
- Mapped building footprints against underground rail paths
- Analyzed overlap between school districts and transit access
- Visualized station-level ridership density
- Computed spatial intersections at building resolution

## 1. Buildings Above Subway Infrastructure

Buildings are spatially intersected with subway line geometry.

Color encoding highlights structures directly above underground tracks.

<div class="image-row2">
  <img src="/portfolio/data-newyork-subway-lines-02.png">
  <img src="/portfolio/data-newyork-subway-lines-03.png">
</div>

This reveals potential implications for noise exposure and infrastructure adjacency.

## 2. Transit Access Within School Districts

Subway entrances are mapped against school district boundaries to evaluate transit accessibility per district.

<div class="image-row3">
  <img src="/portfolio/data-newyork-subway-entrances-02.png">
  <img src="/portfolio/data-newyork-boundaries-school-districts-3d-01.png">
  <img src="/portfolio/data-newyork-subway-entrances-03.png">
</div>

This enables district-level comparison of mobility access.

## 3. Ridership Density

Station-level ridership is visualized to understand commuter pressure and spatial intensity.

<video controls loop>
  <source src="/portfolio/data-newyork-subway-ridership-01.mp4" type="video/mp4">
</video>

## Outcome

This project demonstrates a procedural approach to civic data integration, allowing spatial queries such as:

- Which buildings sit directly above transit lines?
- Which school districts provide high subway accessibility?
- Where are high-density commuter nodes located?

The system is modular and extensible for additional civic datasets.